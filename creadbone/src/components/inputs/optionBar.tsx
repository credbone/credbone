import classNames from 'classnames';
import React, { forwardRef, PropsWithChildren } from 'react';

interface OptionBarProps {
    autosize?: boolean;
    compact?: boolean;
    fixed?: boolean;
    dynamic?: boolean;
    animate?: boolean;
    className?: string;
};

const OptionBar: React.FC<PropsWithChildren<OptionBarProps> > =
    forwardRef<HTMLDivElement, PropsWithChildren<OptionBarProps>>(
        (
            {
                autosize = false,
                compact = false,
                className = '',
                fixed = false,
                dynamic = false,
                animate = false,
                children,
                ...rest
            },
            ref
        ) => {

            return (
                <div
                    ref={ref}
                    className={classNames(
                        'option_bar',
                        {
                            autosize,
                            compact,
                            fixed,
                            dynamic,
                            animate
                        },
                        className
                    )}
                    {...rest}
                >
                    {children}
                </div>
            );
        }
    );

export default OptionBar;