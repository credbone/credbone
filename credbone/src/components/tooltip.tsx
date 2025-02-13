import React, { useState, useRef, useEffect, CSSProperties } from 'react';
import ReactDOM from 'react-dom';

interface TooltipProps {
  content: any;
  children: React.ReactNode;
  placement?: 'top' | 'bottom' | 'left' | 'right' | 'auto';
  distance?:number;
}

const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  placement = 'top',
  distance = 10,
  ...rest
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState<CSSProperties>({});
  const tooltipRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLElement>(null);
  const touchTimeout = useRef<NodeJS.Timeout | null>(null);




  // const handleTouchStart = () => {
  //   setIsVisible(false);
  // };


  
  const calculatePosition = () => {
    if (!childRef.current || !tooltipRef.current) return {};

    const targetRect = childRef.current.getBoundingClientRect();
    const popoverRect = tooltipRef.current.getBoundingClientRect();
    const position: CSSProperties = {};

    const spaceAbove = targetRect.top;
    const spaceBelow = window.innerHeight - targetRect.bottom;

    const fitTop = spaceAbove >= popoverRect.height + distance;
    const fitBottom = spaceBelow >= popoverRect.height + distance;

    const determinePosition = (placement: string) => {
      switch (placement) {
        case 'top':
          position.top = Math.max(distance, targetRect.top - popoverRect.height - distance);
          position.left = Math.max(
            distance,
            Math.min(
              targetRect.left + targetRect.width / 2 - popoverRect.width / 2,
              window.innerWidth - popoverRect.width - distance
            )
          );
          break;
        case 'bottom':
          position.top = Math.min(
            window.innerHeight - popoverRect.height - distance,
            targetRect.bottom + distance
          );
          position.left = Math.max(
            distance,
            Math.min(
              targetRect.left + targetRect.width / 2 - popoverRect.width / 2,
              window.innerWidth - popoverRect.width - distance
            )
          );
          break;
        case 'left':
          position.top = Math.max(
            distance,
            Math.min(
              targetRect.top + targetRect.height / 2 - popoverRect.height / 2,
              window.innerHeight - popoverRect.height - distance
            )
          );
          position.left = Math.max(distance, targetRect.left - popoverRect.width - distance);
          break;
        case 'right':
          position.top = Math.max(
            distance,
            Math.min(
              targetRect.top + targetRect.height / 2 - popoverRect.height / 2,
              window.innerHeight - popoverRect.height - distance
            )
          );
          position.left = Math.min(
            window.innerWidth - popoverRect.width - distance,
            targetRect.right + distance
          );
          break;

        default:
          break;
      }
    };

    switch (placement) {
      case 'auto':
        if (fitTop) {
          determinePosition('top');
        } else if (fitBottom) {
          determinePosition('bottom');
        } else {
          // Default to bottom if neither fit perfectly
          determinePosition('bottom');
        }
        break;
      default:
        determinePosition(placement);
        break;
    }

    return position;
  };

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsVisible(false);
  //   };

  //   window.addEventListener('resize', handleResize);
  //   window.addEventListener('touchstart', handleTouchStart);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //     window.removeEventListener('touchstart', handleTouchStart);
  //     clearTimeout(timer);
  //   };
  // }, []);

  useEffect(() => {
    if (isVisible) {
      const position = calculatePosition();
      setTooltipPosition(position);
    }
  }, [isVisible]);


useEffect(() => {
  const handleOutsideClickOrMouseDown = (event: MouseEvent) => {
    if (
      tooltipRef.current &&
      !tooltipRef.current.contains(event.target as Node) &&
      childRef.current &&
      !childRef.current.contains(event.target as Node)
    ) {
      setIsVisible(false); // Close tooltip if the click or mousedown is outside
    }
  };

 
  document.addEventListener('pointerdown', handleOutsideClickOrMouseDown);

  return () => {

    document.removeEventListener('pointerdown', handleOutsideClickOrMouseDown);
  };
}, []);

  useEffect(() => {
    const handleScroll = (event: Event) => {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target as Node) &&
        childRef.current &&
        !childRef.current.contains(event.target as Node)
      ) {
        setIsVisible(false);
      }
    };


    const handleDocumentClick = (event: MouseEvent) => {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target as Node) &&
        childRef.current &&
        !childRef.current.contains(event.target as Node)
      ) {
        setIsVisible(false);
      }
    };
  
    if (isVisible) {
      document.addEventListener("click", handleDocumentClick);
      window.addEventListener("scroll", handleScroll, true); // Capture scroll events
    } else {
   //   document.removeEventListener("click", handleDocumentClick);
      window.removeEventListener("scroll", handleScroll, true);
    }
  
    return () => {
 //     document.removeEventListener("click", handleDocumentClick);
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [isVisible]);


  const handleTooltipTrigger = (showTooltip: boolean) => {
    setIsVisible(showTooltip);
  };


  const handlePointerDown = (e: React.PointerEvent) => {
    // Start a timer for long-press detection
    touchTimeout.current = setTimeout(() => {
      handleTooltipTrigger(true); // Show tooltip for long press
    }, 300); // Adjust duration as needed
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (e.pointerType === "touch" && touchTimeout.current) {
      clearTimeout(touchTimeout.current); // Cancel long-press detection
   //   console.log("cleared")
    }
    handleTooltipTrigger(false); // Hide tooltip on touch/mouse release
  };

  const handlePointerLeave = (e: React.PointerEvent) => {
  //  console.log("leave");
    if (e.pointerType === "touch" && touchTimeout.current) {
      clearTimeout(touchTimeout.current); // Cancel long-press detection
     // console.log("cleared on leave")
    }
    handleTooltipTrigger(false);
  };

  // const handlePointerMove = (e: React.PointerEvent) => {
  //   if (e.pointerType === "touch") {
  //     handleTooltipTrigger(false); // Close tooltip immediately if touch moves
  //   }
  // };

  return (
    <>
{React.cloneElement(children as React.ReactElement, {
  ref: childRef,
  onPointerDown: (e: React.PointerEvent) => {
    if (e.pointerType === "touch") {
      handlePointerDown(e);
    }
  },
 //onPointerUp: handlePointerUp,
 //onPointerMove: handlePointerMove, // Detect swipe
  onPointerEnter: (e: React.PointerEvent) => {
    if (e.pointerType === "mouse") {
      handleTooltipTrigger(true); // Show tooltip on mouse hover
    }
  },
  onPointerLeave: handlePointerLeave,
  
})}

      {isVisible &&
        content &&
        ReactDOM.createPortal(
          <group
          data-contain=""
           data-background="tooltip"
           data-color="white"
            data-length="auto"
            data-radius="10"
            data-space="12"
            ref={tooltipRef}
            className={`tooltip ${placement}`}
            style={tooltipPosition}
            {...rest}
          >
            {content}
          </group>,
          document.getElementById('tooltip-container')!
        )}
    </>
  );
};

export default Tooltip;
