import Ripple from "../components/Ripple";
import React, { useState } from "react";
import { useSnackbar } from "../components/snackbar/SnackbarContainer";
//import { Tooltip, message, notification } from "antd";



    const Icons = [
{ label: "Search Icon" , name: "search" , Title: "Search"},
{ label: "Home Icon" , name: "home" , Title: "Home"},
{ label: "Menu Icon" , name: "menu" , Title: "Menu"},
{ label: "Close Icon" , name: "close" , Title: "Close"},
{ label: "Settings Icon" , name: "settings" , Title: "Settings"},
{ label: "Done Icon" , name: "done" , Title: "Done"},
{ label: "Expand More Icon" , name: "expand_more" , Title: "Expand More"},
{ label: "Check Circle Icon" , name: "check_circle" , Title: "Check Circle"},
{ label: "Favorite Icon" , name: "favorite" , Title: "Favorite"},
{ label: "Add Icon" , name: "add" , Title: "Add"},
{ label: "Delete Icon" , name: "delete" , Title: "Delete"},
{ label: "Arrow Back Icon" , name: "arrow_back" , Title: "Arrow Back"},
{ label: "Star Icon" , name: "star" , Title: "Star"},
{ label: "Chevron Right Icon" , name: "chevron_right" , Title: "Chevron Right"},
{ label: "Logout Icon" , name: "logout" , Title: "Logout"},
{ label: "Arrow Forward iOS Icon" , name: "arrow_forward_ios" , Title: "Arrow Forward iOS"},
{ label: "Add Circle Icon" , name: "add_circle" , Title: "Add Circle"},
{ label: "Cancel Icon" , name: "cancel" , Title: "Cancel"},
{ label: "Arrow Back iOS Icon" , name: "arrow_back_ios" , Title: "Arrow Back iOS"},
{ label: "Arrow Forward Icon" , name: "arrow_forward" , Title: "Arrow Forward"},
{ label: "Arrow Drop Down Icon" , name: "arrow_drop_down" , Title: "Arrow Drop Down"},
{ label: "More Vert Icon" , name: "more_vert" , Title: "More Vert"},
{ label: "Check Icon" , name: "check" , Title: "Check"},
// { label: "Check Box Icon" , name: "check_box" , Title: "Check Box"},
{ label: "Open In New Icon" , name: "open_in_new" , Title: "Open In New"},
// { label: "Toggle On Icon" , name: "toggle_on" , Title: "Toggle On"},
{ label: "Grade Icon" , name: "grade" , Title: "Grade"},
{ label: "Refresh Icon" , name: "refresh" , Title: "Refresh"},
{ label: "Check Box Outline Blank Icon" , name: "check_box_outline_blank" , Title: "Check Box Outline Blank"},
{ label: "Login Icon" , name: "login" , Title: "Login"},
{ label: "Chevron Left Icon" , name: "chevron_left" , Title: "Chevron Left"},
{ label: "Expand Less Icon" , name: "expand_less" , Title: "Expand Less"},
// { label: "Radio Button Unchecked Icon" , name: "radio_button_unchecked" , Title: "Radio Button Unchecked"},
{ label: "More Horiz Icon" , name: "more_horiz" , Title: "More Horiz"},
{ label: "Download Icon" , name: "download" , Title: "Download"},
{ label: "Apps Icon" , name: "apps" , Title: "Apps"},
{ label: "Arrow Right Alt Icon" , name: "arrow_right_alt" , Title: "Arrow Right Alt"},
// { label: "Radio Button Checked Icon" , name: "radio_button_checked" , Title: "Radio Button Checked"},
// { label: "Remove Icon" , name: "remove" , Title: "Remove"},
// { label: "Bolt Icon" , name: "bolt" , Title: "Bolt"},
// { label: "Toggle Off Icon" , name: "toggle_off" , Title: "Toggle Off"},
{ label: "Arrow Upward Icon" , name: "arrow_upward" , Title: "Arrow Upward"},
// { label: "Filter List Icon" , name: "filter_list" , Title: "Filter List"},
// { label: "Delete Forever Icon" , name: "delete_forever" , Title: "Delete Forever"},
// { label: "Autorenew Icon" , name: "autorenew" , Title: "Autorenew"},
{ label: "Key Icon" , name: "key" , Title: "Key"},
// { label: "Sync Icon" , name: "sync" , Title: "Sync"},
{ label: "Block Icon" , name: "block" , Title: "Block"},
{ label: "Arrow Downward Icon" , name: "arrow_downward" , Title: "Arrow Downward"},
{ label: "Sort Icon" , name: "sort" , Title: "Sort"},
{ label: "Add Box Icon" , name: "add_box" , Title: "Add Box"},
{ label: "Arrow Back iOS New Icon" , name: "arrow_back_ios_new" , Title: "Arrow Back iOS New"},
{ label: "Restart Alt Icon" , name: "restart_alt" , Title: "Restart Alt"},
{ label: "Shopping Cart Checkout Icon" , name: "shopping_cart_checkout" , Title: "Shopping Cart Checkout"},
{ label: "Menu Open Icon" , name: "menu_open" , Title: "Menu Open"},
{ label: "Expand Circle Down Icon" , name: "expand_circle_down" , Title: "Expand Circle Down"},
{ label: "Undo Icon" , name: "undo" , Title: "Undo"},
{ label: "Backspace Icon" , name: "backspace" , Title: "Backspace"},
{ label: "Arrow Circle Right Icon" , name: "arrow_circle_right" , Title: "Arrow Circle Right"},
{ label: "Done All Icon" , name: "done_all" , Title: "Done All"},
{ label: "Arrow Right Icon" , name: "arrow_right" , Title: "Arrow Right"},
{ label: "Do Not Disturb On Icon" , name: "do_not_disturb_on" , Title: "Do Not Disturb On"},
{ label: "Open In Full Icon" , name: "open_in_full" , Title: "Open In Full"},
{ label: "Manage Search Icon" , name: "manage_search" , Title: "Manage Search"},
{ label: "Double Arrow Icon" , name: "double_arrow" , Title: "Double Arrow"},
{ label: "Sync Alt Icon" , name: "sync_alt" , Title: "Sync Alt"},
{ label: "Done Outline Icon" , name: "done_outline" , Title: "Done Outline"},
{ label: "Zoom In Icon" , name: "zoom_in" , Title: "Zoom In"},
{ label: "Drag Indicator Icon" , name: "drag_indicator" , Title: "Drag Indicator"},
{ label: "Fullscreen Icon" , name: "fullscreen" , Title: "Fullscreen"},
{ label: "Keyboard Double Arrow Right Icon" , name: "keyboard_double_arrow_right" , Title: "Keyboard Double Arrow Right"},
{ label: "Star Half Icon" , name: "star_half" , Title: "Star Half"},
{ label: "iOS Share Icon" , name: "ios_share" , Title: "iOS Share"},
{ label: "Settings Accessibility Icon" , name: "settings_accessibility" , Title: "Settings Accessibility"},
{ label: "Arrow Drop Up Icon" , name: "arrow_drop_up" , Title: "Arrow Drop Up"},
{ label: "Reply Icon" , name: "reply" , Title: "Reply"},
{ label: "Exit To App Icon" , name: "exit_to_app" , Title: "Exit To App"},
{ label: "Unfold More Icon" , name: "unfold_more" , Title: "Unfold More"},
{ label: "Library Add Icon" , name: "library_add" , Title: "Library Add"},
{ label: "Cached Icon" , name: "cached" , Title: "Cached"},
{ label: "Terminal Icon" , name: "terminal" , Title: "Terminal"},
{ label: "Select Check Box Icon" , name: "select_check_box" , Title: "Select Check Box"},
{ label: "Change Circle Icon" , name: "change_circle" , Title: "Change Circle"},
{ label: "Disabled By Default Icon" , name: "disabled_by_default" , Title: "Disabled By Default"},
{ label: "Swap Horiz Icon" , name: "swap_horiz" , Title: "Swap Horiz"},
{ label: "Swap Vert Icon" , name: "swap_vert" , Title: "Swap Vert"},
{ label: "Close Fullscreen Icon" , name: "close_fullscreen" , Title: "Close Fullscreen"},
{ label: "App Registration Icon" , name: "app_registration" , Title: "App Registration"},
{ label: "Download For Offline Icon" , name: "download_for_offline" , Title: "Download For Offline"},
{ label: "Arrow Circle Left Icon" , name: "arrow_circle_left" , Title: "Arrow Circle Left"},
{ label: "Arrow Circle Up Icon" , name: "arrow_circle_up" , Title: "Arrow Circle Up"},
{ label: "File Open Icon" , name: "file_open" , Title: "File Open"},
{ label: "Dataset Icon" , name: "dataset" , Title: "Dataset"},
{ label: "Minimize Icon" , name: "minimize" , Title: "Minimize"},
{ label: "Open With Icon" , name: "open_with" , Title: "Open With"},
{ label: "Add Task Icon" , name: "add_task" , Title: "Add Task"},
{ label: "Keyboard Double Arrow Left Icon" , name: "keyboard_double_arrow_left" , Title: "Keyboard Double Arrow Left"},
{ label: "Start Icon" , name: "start" , Title: "Start"},
{ label: "Keyboard Double Arrow Down Icon" , name: "keyboard_double_arrow_down" , Title: "Keyboard Double Arrow Down"},
{ label: "Create New Folder Icon" , name: "create_new_folder" , Title: "Create New Folder"},
{ label: "Forward Icon" , name: "forward" , Title: "Forward"},
{ label: "Downloading Icon" , name: "downloading" , Title: "Downloading"},
{ label: "Upload Icon" , name: "upload" , Title: "Upload"},
{ label: "Settings Applications Icon" , name: "settings_applications" , Title: "Settings Applications"},
{ label: "Compare Arrows Icon" , name: "compare_arrows" , Title: "Compare Arrows"},
{ label: "Redo Icon" , name: "redo" , Title: "Redo"},
{ label: "Publish Icon" , name: "publish" , Title: "Publish"},
{ label: "Zoom Out Icon" , name: "zoom_out" , Title: "Zoom Out"},
{ label: "Arrow Left Icon" , name: "arrow_left" , Title: "Arrow Left"},
//{ label: "HTML Icon" , name: "html" , Title: "HTML"},
{ label: "Token Icon" , name: "token" , Title: "Token"},
{ label: "Switch Access Shortcut Icon" , name: "switch_access_shortcut" , Title: "Switch Access Shortcut"},
{ label: "Fullscreen Exit Icon" , name: "fullscreen_exit" , Title: "Fullscreen Exit"},
{ label: "Arrow Circle Down Icon" , name: "arrow_circle_down" , Title: "Arrow Circle Down"},
{ label: "Sort By Alpha Icon" , name: "sort_by_alpha" , Title: "Sort By Alpha"},
{ label: "Delete Sweep Icon" , name: "delete_sweep" , Title: "Delete Sweep"},
{ label: "Indeterminate Check Box Icon" , name: "indeterminate_check_box" , Title: "Indeterminate Check Box"},
{ label: "First Page Icon" , name: "first_page" , Title: "First Page"},
{ label: "View Timeline Icon" , name: "view_timeline" , Title: "View Timeline"},
{ label: "Keyboard Double Arrow Up Icon" , name: "keyboard_double_arrow_up" , Title: "Keyboard Double Arrow Up"},
{ label: "Settings Backup Restore Icon" , name: "settings_backup_restore" , Title: "Settings Backup Restore"},
{ label: "Assistant Navigation Icon" , name: "assistant_navigation" , Title: "Assistant Navigation"},
{ label: "Arrow Drop Down Circle Icon" , name: "arrow_drop_down_circle" , Title: "Arrow Drop Down Circle"},
{ label: "Sync Problem Icon" , name: "sync_problem" , Title: "Sync Problem"},
{ label: "Clear All Icon" , name: "clear_all" , Title: "Clear All"},
{ label: "Heart Plus Icon" , name: "heart_plus" , Title: "Heart Plus"},
{ label: "Density Medium Icon" , name: "density_medium" , Title: "Density Medium"},
{ label: "Expand Icon" , name: "expand" , Title: "Expand"},
{ label: "Filter Alt Off Icon" , name: "filter_alt_off" , Title: "Filter Alt Off"},
{ label: "Last Page Icon" , name: "last_page" , Title: "Last Page"},
{ label: "Subdirectory Arrow Right Icon" , name: "subdirectory_arrow_right" , Title: "Subdirectory Arrow Right"},
{ label: "Arrow Outward Icon" , name: "arrow_outward" , Title: "Arrow Outward"},
{ label: "Unfold Less Icon" , name: "unfold_less" , Title: "Unfold Less"},
{ label: "Download Done Icon" , name: "download_done" , Title: "Download Done"},
//{ label: "123 Icon" , name: "123" , Title: "123"},
{ label: "Swipe Left Icon" , name: "swipe_left" , Title: "Swipe Left"},
{ label: "Saved Search Icon" , name: "saved_search" , Title: "Saved Search"},
{ label: "System Update Alt Icon" , name: "system_update_alt" , Title: "System Update Alt"},
{ label: "Place Item Icon" , name: "place_item" , Title: "Place Item"},
{ label: "Output Icon" , name: "output" , Title: "Output"},
//{ label: "Javascript Icon" , name: "javascript" , Title: "Javascript"},
// { label: "Search Off Icon" , name: "search_off" , Title: "Search Off"},
// { label: "Maximize Icon" , name: "maximize" , Title: "Maximize"},
// { label: "Swipe Up Icon" , name: "swipe_up" , Title: "Swipe Up"},
// { label: "Select All Icon" , name: "select_all" , Title: "Select All"},
// { label: "Fit Screen Icon" , name: "fit_screen" , Title: "Fit Screen"},
// { label: "Dynamic Form Icon" , name: "dynamic_form" , Title: "Dynamic Form"},
// { label: "Hide Source Icon" , name: "hide_source" , Title: "Hide Source"},
// { label: "Swipe Right Icon" , name: "swipe_right" , Title: "Swipe Right"},
// { label: "Check Small Icon" , name: "check_small" , Title: "Check Small"},
// { label: "Switch Access Shortcut Add Icon" , name: "switch_access_shortcut_add" , Title: "Switch Access Shortcut Add"},
// { label: "Browse Gallery Icon" , name: "browse_gallery" , Title: "Browse Gallery"},
// { label: "Density Small Icon" , name: "density_small" , Title: "Density Small"},
//{ label: "CSS Icon" , name: "css" , Title: "CSS"},
// { label: "Assistant Direction Icon" , name: "assistant_direction" , Title: "Assistant Direction"},
// { label: "File Download Done Icon" , name: "file_download_done" , Title: "File Download Done"},
// { label: "Move Up Icon" , name: "move_up" , Title: "Move Up"},
// { label: "Youtube Searched For Icon" , name: "youtube_searched_for" , Title: "Youtube Searched For"},
// { label: "Swap Horizontal Circle Icon" , name: "swap_horizontal_circle" , Title: "Swap Horizontal Circle"},
// { label: "Data Thresholding Icon" , name: "data_thresholding" , Title: "Data Thresholding"},
// { label: "Install Mobile Icon" , name: "install_mobile" , Title: "Install Mobile"},
//{ label: "Abc Icon" , name: "abc" , Title: "Abc"},
// { label: "Move Down Icon" , name: "move_down" , Title: "Move Down"},
// { label: "Dataset Linked Icon" , name: "dataset_linked" , Title: "Dataset Linked"},
// { label: "Restore From Trash Icon" , name: "restore_from_trash" , Title: "Restore From Trash"},
// { label: "Enable Icon" , name: "enable" , Title: "Enable"},
// { label: "Install Desktop Icon" , name: "install_desktop" , Title: "Install Desktop"},
// { label: "Browse Activity Icon" , name: "browse_activity" , Title: "Browse Activity"},
// { label: "Keyboard Command Key Icon" , name: "keyboard_command_key" , Title: "Keyboard Command Key"},
// { label: "View Kanban Icon" , name: "view_kanban" , Title: "View Kanban"},
// { label: "Reply All Icon" , name: "reply_all" , Title: "Reply All"},
// { label: "Switch Left Icon" , name: "switch_left" , Title: "Switch Left"},
// { label: "Compress Icon" , name: "compress" , Title: "Compress"},
// { label: "Swipe Down Icon" , name: "swipe_down" , Title: "Swipe Down"},
// { label: "Remove Done Icon" , name: "remove_done" , Title: "Remove Done"},
// { label: "Swap Vertical Circle Icon" , name: "swap_vertical_circle" , Title: "Swap Vertical Circle"},
// { label: "Apps Outage Icon" , name: "apps_outage" , Title: "Apps Outage"},
// { label: "Filter List Off Icon" , name: "filter_list_off" , Title: "Filter List Off"},
// { label: "Star Rate Icon" , name: "star_rate" , Title: "Star Rate"},
// { label: "Hide Icon" , name: "hide" , Title: "Hide"},
// { label: "Switch Right Icon" , name: "switch_right" , Title: "Switch Right"},
// { label: "Swipe Vertical Icon" , name: "swipe_vertical" , Title: "Swipe Vertical"},
// { label: "More Up Icon" , name: "more_up" , Title: "More Up"},
// { label: "Sync Disabled Icon" , name: "sync_disabled" , Title: "Sync Disabled"},
// { label: "Pinch Icon" , name: "pinch" , Title: "Pinch"},
// { label: "Keyboard Control Key Icon" , name: "keyboard_control_key" , Title: "Keyboard Control Key"},
// { label: "Eject Icon" , name: "eject" , Title: "Eject"},
// { label: "Key Off Icon" , name: "key_off" , Title: "Key Off"},
// { label: "PHP Icon" , name: "php" , Title: "PHP"},
// { label: "Subdirectory Arrow Left Icon" , name: "subdirectory_arrow_left" , Title: "Subdirectory Arrow Left"},
// { label: "View Cozy Icon" , name: "view_cozy" , Title: "View Cozy"},
// { label: "Transcribe Icon" , name: "transcribe" , Title: "Transcribe"},
// { label: "Do Not Disturb Off Icon" , name: "do_not_disturb_off" , Title: "Do Not Disturb Off"},
// { label: "Send Time Extension Icon" , name: "send_time_extension" , Title: "Send Time Extension"},
// { label: "Width Normal Icon" , name: "width_normal" , Title: "Width Normal"},
// { label: "View Comfy Alt Icon" , name: "view_comfy_alt" , Title: "View Comfy Alt"},
// { label: "Heart Minus Icon" , name: "heart_minus" , Title: "Heart Minus"},
// { label: "Share Reviews Icon" , name: "share_reviews" , Title: "Share Reviews"},
// { label: "Width Full Icon" , name: "width_full" , Title: "Width Full"},
// // { label: "Unfold More Double Icon" , name: "unfold_more_double" , Title: "Unfold More Double"},
// { label: "File Download Off Icon" , name: "file_download_off" , Title: "File Download Off"},
// { label: "View Compact Alt Icon" , name: "view_compact_alt" , Title: "View Compact Alt"},
// { label: "Extension Off Icon" , name: "extension_off" , Title: "Extension Off"},
// { label: "Open In New Off Icon" , name: "open_in_new_off" , Title: "Open In New Off"},
// { label: "Check Indeterminate Small Icon" , name: "check_indeterminate_small" , Title: "Check Indeterminate Small"},
// { label: "More Down Icon" , name: "more_down" , Title: "More Down"},
// { label: "Width Wide Icon" , name: "width_wide" , Title: "Width Wide"},
// { label: "Repartition Icon" , name: "repartition" , Title: "Repartition"},
// { label: "Progress Activity Icon" , name: "progress_activity" , Title: "Progress Activity"},
// { label: "Cycle Icon" , name: "cycle" , Title: "Cycle"},
// { label: "Density Large Icon" , name: "density_large" , Title: "Density Large"},
// { label: "Swipe Left Alt Icon" , name: "swipe_left_alt" , Title: "Swipe Left Alt"},
// { label: "Swipe Down Alt Icon" , name: "swipe_down_alt" , Title: "Swipe Down Alt"},
// { label: "Swipe Up Alt Icon" , name: "swipe_up_alt" , Title: "Swipe Up Alt"},
// { label: "Swipe Right Alt Icon" , name: "swipe_right_alt" , Title: "Swipe Right Alt"},
// { label: "Unfold Less Double Icon" , name: "unfold_less_double" , Title: "Unfold Less Double"},
// { label: "Keyboard Option Key Icon" , name: "keyboard_option_key" , Title: "Keyboard Option Key"},
//{ label: "HLS Icon" , name: "hls" , Title: "HLS"},
//{ label: "HLS Off Icon" , name: "hls_off" , Title: "HLS Off"},
// { label: "File Upload Off Icon" , name: "file_upload_off" , Title: "File Upload Off"},
// { label: "Expand Content Icon" , name: "expand_content" , Title: "Expand Content"},
// { label: "Expand All Icon" , name: "expand_all" , Title: "Expand All"},
// { label: "Rebase Icon" , name: "rebase" , Title: "Rebase"},
// { label: "Collapse All Icon" , name: "collapse_all" , Title: "Collapse All"},
// { label: "Quick Reference All Icon" , name: "quick_reference_all" , Title: "Quick Reference All"},
// { label: "Rebase Edit Icon" , name: "rebase_edit" , Title: "Rebase Edit"},
// { label: "Deployed Code Icon" , name: "deployed_code" , Title: "Deployed Code"},
// { label: "Stat 0 Icon" , name: "stat_0" , Title: "Stat 0"},
// { label: "Arrow Split Icon" , name: "arrow_split" , Title: "Arrow Split"},
// { label: "Stack Icon" , name: "stack" , Title: "Stack"},
// { label: "Empty Dashboard Icon" , name: "empty_dashboard" , Title: "Empty Dashboard"},
// { label: "Acute Icon" , name: "acute" , Title: "Acute"},
// { label: "Data Check Icon" , name: "data_check" , Title: "Data Check"},
// { label: "Arrow Upward Alt Icon" , name: "arrow_upward_alt" , Title: "Arrow Upward Alt"},
// { label: "Switches Icon" , name: "switches" , Title: "Switches"},
// { label: "Left Click Icon" , name: "left_click" , Title: "Left Click"},
// { label: "Quick Reference Icon" , name: "quick_reference" , Title: "Quick Reference"},
// { label: "Sync Saved Locally Icon" , name: "sync_saved_locally" , Title: "Sync Saved Locally"},
// { label: "Arrow Downward Alt Icon" , name: "arrow_downward_alt" , Title: "Arrow Downward Alt"},
// { label: "Page Info Icon" , name: "page_info" , Title: "Page Info"},
// { label: "Clock Loader 60 Icon" , name: "clock_loader_60" , Title: "Clock Loader 60"},
// { label: "Data Alert Icon" , name: "data_alert" , Title: "Data Alert"},
// { label: "Directory Sync Icon" , name: "directory_sync" , Title: "Directory Sync"},
// { label: "Arrow Insert Icon" , name: "arrow_insert" , Title: "Arrow Insert"},
// { label: "Side Navigation Icon" , name: "side_navigation" , Title: "Side Navigation"},
// { label: "Cards Icon" , name: "cards" , Title: "Cards"},
// { label: "Captive Portal Icon" , name: "captive_portal" , Title: "Captive Portal"},
// { label: "Data Info Alert Icon" , name: "data_info_alert" , Title: "Data Info Alert"},
// { label: "Question Exchange Icon" , name: "question_exchange" , Title: "Question Exchange"},
// { label: "Point Scan Icon" , name: "point_scan" , Title: "Point Scan"},
// { label: "Search Check Icon" , name: "search_check" , Title: "Search Check"},
// { label: "Steppers Icon" , name: "steppers" , Title: "Steppers"},
// { label: "Preliminary Icon" , name: "preliminary" , Title: "Preliminary"},
// { label: "Rule Settings Icon" , name: "rule_settings" , Title: "Rule Settings"},
// { label: "Move Item Icon" , name: "move_item" , Title: "Move Item"},
// { label: "Bubble Icon" , name: "bubble" , Title: "Bubble"},
// { label: "Stacks Icon" , name: "stacks" , Title: "Stacks"},
// { label: "Step Icon" , name: "step" , Title: "Step"},
// { label: "Unknown Med Icon" , name: "unknown_med" , Title: "Unknown Med"},
// { label: "Stat 3 Icon" , name: "stat_3" , Title: "Stat 3"},
// { label: "Arrow Left Alt Icon" , name: "arrow_left_alt" , Title: "Arrow Left Alt"},
// { label: "Stack Star Icon" , name: "stack_star" , Title: "Stack Star"},
// { label: "Star Rate Half Icon" , name: "star_rate_half" , Title: "Star Rate Half"},
// { label: "Clock Loader 10 Icon" , name: "clock_loader_10" , Title: "Clock Loader 10"},
// { label: "Expand Circle Right Icon" , name: "expand_circle_right" , Title: "Expand Circle Right"},
// { label: "New Window Icon" , name: "new_window" , Title: "New Window"},
// { label: "Drag Pan Icon" , name: "drag_pan" , Title: "Drag Pan"},
// { label: "Right Panel Close Icon" , name: "right_panel_close" , Title: "Right Panel Close"},
// { label: "Toolbar Icon" , name: "toolbar" , Title: "Toolbar"},
// { label: "Right Panel Open Icon" , name: "right_panel_open" , Title: "Right Panel Open"},
// { label: "Prompt Suggestion Icon" , name: "prompt_suggestion" , Title: "Prompt Suggestion"},
// { label: "Sweep Icon" , name: "sweep" , Title: "Sweep"},
// { label: "Expand Circle Up Icon" , name: "expand_circle_up" , Title: "Expand Circle Up"},
// { label: "Linked Services Icon" , name: "linked_services" , Title: "Linked Services"},
// { label: "Clock Loader 40 Icon" , name: "clock_loader_40" , Title: "Clock Loader 40"},
// { label: "Share Windows Icon" , name: "share_windows" , Title: "Share Windows"},
// { label: "Heart Check Icon" , name: "heart_check" , Title: "Heart Check"},
// { label: "Patient List Icon" , name: "patient_list" , Title: "Patient List"},
// { label: "Collapse Content Icon" , name: "collapse_content" , Title: "Collapse Content"},
// { label: "Responsive Layout Icon" , name: "responsive_layout" , Title: "Responsive Layout"},
// { label: "Clock Loader 80 Icon" , name: "clock_loader_80" , Title: "Clock Loader 80"},
// { label: "Dialogs Icon" , name: "dialogs" , Title: "Dialogs"},
// { label: "Event List Icon" , name: "event_list" , Title: "Event List"},
// { label: "Input Circle Icon" , name: "input_circle" , Title: "Input Circle"},
// { label: "Left Panel Close Icon" , name: "left_panel_close" , Title: "Left Panel Close"},
// { label: "Clock Loader 90 Icon" , name: "clock_loader_90" , Title: "Clock Loader 90"},
// { label: "Page Control Icon" , name: "page_control" , Title: "Page Control"},
// { label: "Stat 2 Icon" , name: "stat_2" , Title: "Stat 2"},
// { label: "Resize Icon" , name: "resize" , Title: "Resize"},
// { label: "Pip Icon" , name: "pip" , Title: "Pip"},
// { label: "Stat Minus 1 Icon" , name: "stat_minus_1" , Title: "Stat Minus 1"},
// { label: "All Match Icon" , name: "all_match" , Title: "All Match"},
// { label: "Action Key Icon" , name: "action_key" , Title: "Action Key"},
// { label: "Deployed Code Update Icon" , name: "deployed_code_update" , Title: "Deployed Code Update"},
// { label: "Move Group Icon" , name: "move_group" , Title: "Move Group"},
// { label: "Stat Minus 2 Icon" , name: "stat_minus_2" , Title: "Stat Minus 2"},
// { label: "Left Panel Open Icon" , name: "left_panel_open" , Title: "Left Panel Open"},
// { label: "Capture Icon" , name: "capture" , Title: "Capture"},
// { label: "Buttons Alt Icon" , name: "buttons_alt" , Title: "Buttons Alt"},
// { label: "Step Over Icon" , name: "step_over" , Title: "Step Over"},
// { label: "Clock Loader 20 Icon" , name: "clock_loader_20" , Title: "Clock Loader 20"},
// { label: "Radio Button Partial Icon" , name: "radio_button_partial" , Title: "Radio Button Partial"},
// { label: "Step Into Icon" , name: "step_into" , Title: "Step Into"},
// { label: "Close Small Icon" , name: "close_small" , Title: "Close Small"},
// { label: "Magnification Small Icon" , name: "magnification_small" , Title: "Magnification Small"},
// { label: "Sliders Icon" , name: "sliders" , Title: "Sliders"},
// { label: "Stat 1 Icon" , name: "stat_1" , Title: "Stat 1"},
// { label: "Stat Minus 3 Icon" , name: "stat_minus_3" , Title: "Stat Minus 3"},
// { label: "Bottom Panel Open Icon" , name: "bottom_panel_open" , Title: "Bottom Panel Open"},
// { label: "Magnification Large Icon" , name: "magnification_large" , Title: "Magnification Large"},
// { label: "Partner Reports Icon" , name: "partner_reports" , Title: "Partner Reports"},
// { label: "Arrow Range Icon" , name: "arrow_range" , Title: "Arrow Range"},
// { label: "Dropdown Icon" , name: "dropdown" , Title: "Dropdown"},
// { label: "Stack Off Icon" , name: "stack_off" , Title: "Stack Off"},
// { label: "Bottom Navigation Icon" , name: "bottom_navigation" , Title: "Bottom Navigation"},
// { label: "Drag Click Icon" , name: "drag_click" , Title: "Drag Click"},
// { label: "Chip Extraction Icon" , name: "chip_extraction" , Title: "Chip Extraction"},
// { label: "Chronic Icon" , name: "chronic" , Title: "Chronic"},
// { label: "Key Vertical Icon" , name: "key_vertical" , Title: "Key Vertical"},
// { label: "Arrow And Edge Icon" , name: "arrow_and_edge" , Title: "Arrow And Edge"},
// { label: "Bottom Drawer Icon" , name: "bottom_drawer" , Title: "Bottom Drawer"},
// { label: "Right Click Icon" , name: "right_click" , Title: "Right Click"},
// { label: "Tabs Icon" , name: "tabs" , Title: "Tabs"},
// { label: "Go To Line Icon" , name: "go_to_line" , Title: "Go To Line"},
// { label: "Shelf Position Icon" , name: "shelf_position" , Title: "Shelf Position"},
// { label: "App Badging Icon" , name: "app_badging" , Title: "App Badging"},
// { label: "Bottom Sheets Icon" , name: "bottom_sheets" , Title: "Bottom Sheets"},
// { label: "Iframe Icon" , name: "iframe" , Title: "Iframe"},
// { label: "Open In New Down Icon" , name: "open_in_new_down" , Title: "Open In New Down"},
// { label: "Subheader Icon" , name: "subheader" , Title: "Subheader"},
// { label: "Unknown 5 Icon" , name: "unknown_5" , Title: "Unknown 5"},
// { label: "Arrows Outward Icon" , name: "arrows_outward" , Title: "Arrows Outward"},
// { label: "Step Out Icon" , name: "step_out" , Title: "Step Out"},
// { label: "Download 2 Icon" , name: "download_2" , Title: "Download 2"},
// { label: "Highlight Mouse Cursor Icon" , name: "highlight_mouse_cursor" , Title: "Highlight Mouse Cursor"},
// { label: "Amend Icon" , name: "amend" , Title: "Amend"},
// { label: "Arrow Or Edge Icon" , name: "arrow_or_edge" , Title: "Arrow Or Edge"},
// { label: "Bottom Right Click Icon" , name: "bottom_right_click" , Title: "Bottom Right Click"},
// { label: "Deployed Code Alert Icon" , name: "deployed_code_alert" , Title: "Deployed Code Alert"},
// { label: "Move Selection Left Icon" , name: "move_selection_left" , Title: "Move Selection Left"},
// { label: "Open Run Icon" , name: "open_run" , Title: "Open Run"},
// { label: "Pip Exit Icon" , name: "pip_exit" , Title: "Pip Exit"},
// { label: "Ripples Icon" , name: "ripples" , Title: "Ripples"},
// { label: "Switch Access Icon" , name: "switch_access" , Title: "Switch Access"},
// { label: "Toast Icon" , name: "toast" , Title: "Toast"},
// { label: "Bottom Panel Close Icon" , name: "bottom_panel_close" , Title: "Bottom Panel Close"},
// { label: "Chips Icon" , name: "chips" , Title: "Chips"},
// { label: "Deployed Code History Icon" , name: "deployed_code_history" , Title: "Deployed Code History"},
// { label: "Jump To Element Icon" , name: "jump_to_element" , Title: "Jump To Element"},
// { label: "Bubbles Icon" , name: "bubbles" , Title: "Bubbles"},
// { label: "Output Circle Icon" , name: "output_circle" , Title: "Output Circle"},
// { label: "Reopen Window Icon" , name: "reopen_window" , Title: "Reopen Window"},
// { label: "Settings Heart Icon" , name: "settings_heart" , Title: "Settings Heart"},
// { label: "Error Med Icon" , name: "error_med" , Title: "Error Med"},
// { label: "Switch Access 2 Icon" , name: "switch_access_2" , Title: "Switch Access 2"},
// { label: "Arrow Top Left Icon" , name: "arrow_top_left" , Title: "Arrow Top Left"},
// { label: "Back To Tab Icon" , name: "back_to_tab" , Title: "Back To Tab"},
// { label: "Iframe Off Icon" , name: "iframe_off" , Title: "Iframe Off"},
// { label: "Move Selection Right Icon" , name: "move_selection_right" , Title: "Move Selection Right"},
// { label: "Position Bottom Right Icon" , name: "position_bottom_right" , Title: "Position Bottom Right"},
// { label: "Position Top Right Icon" , name: "position_top_right" , Title: "Position Top Right"},
// { label: "Shelf Auto Hide Icon" , name: "shelf_auto_hide" , Title: "Shelf Auto Hide"},
// { label: "Upload 2 Icon" , name: "upload_2" , Title: "Upload 2"},
// { label: "Arrow Top Right Icon" , name: "arrow_top_right" , Title: "Arrow Top Right"},
// { label: "Move Selection Up Icon" , name: "move_selection_up" , Title: "Move Selection Up"},
// { label: "Recenter Icon" , name: "recenter" , Title: "Recenter"},
// { label: "Bottom App Bar Icon" , name: "bottom_app_bar" , Title: "Bottom App Bar"},
// { label: "Deployed Code Account Icon" , name: "deployed_code_account" , Title: "Deployed Code Account"},
// { label: "Position Bottom Left Icon" , name: "position_bottom_left" , Title: "Position Bottom Left"},
// { label: "Move Selection Down Icon" , name: "move_selection_down" , Title: "Move Selection Down"},
// { label: "Highlight Text Cursor Icon" , name: "highlight_text_cursor" , Title: "Highlight Text Cursor"},
// { label: "Highlight Keyboard Focus Icon" , name: "highlight_keyboard_focus" , Title: "Highlight Keyboard Focus"},

];
    






const MaterialIcons = () => {
  const { addSnackbar } = useSnackbar();
const [selectedIcon, setSelectedIcon] = useState<string | null>(null); 

const handleIconClick = (iconName: string) => {
  setSelectedIcon(iconName); 

  if (navigator.clipboard) {
      navigator.clipboard.writeText(iconName)
          .catch((error) => {
              console.error("Failed to copy icon name to clipboard:", error);
          });
  } else {
   // console.error("Clipboard API is not supported in this environment.");
    addSnackbar(<text data-ellipsis="">Clipboard API not supported here</text>, 2000, 'icon-source', true);
  }
};

  const isSelected = (iconName: string) => {
   
    return selectedIcon === iconName;
  };

  return (
    <>

      {Icons.map((icon) => (
        <Ripple>
          <group
            key={icon.name}
            onClick={() => handleIconClick(icon.name)}
            className={isSelected(icon.name) ? "selected" : ""}
            data-ink-color={isSelected(icon.name) ? "main-dark" : ""}
            data-name="icon-demo"
            data-contain=""
            data-interactive=""

            data-space="15"
            data-cursor="pointer"
            data-ratio="1:1"
            data-radius="10"
          >
           
              <group
                data-index="1"
                data-justify="center"
                data-align="center"
                data-gap="20"
                data-direction="column"
              >
                <icon data-icon-size="mini">{icon.name}</icon>
                <text data-light="" data-ellipsis="">{icon.Title}</text>
              </group>
           
          </group>
        </Ripple>
      ))}
    </>
  );
};

export default MaterialIcons;