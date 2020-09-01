export const $font_size_root = 16;
// Color Palette
export const $black = '#000';
export const $white = '#fff';
export const $gray1 = '#f7f8fa';
export const $gray2 = '#f2f3f5';
export const $gray3 = '#ebedf0';
export const $gray4 = '#dcdee0';
export const $gray5 = '#c8c9cc';
export const $gray6 = '#969799';
export const $gray7 = '#646566';
export const $gray8 = '#323233';
export const $red = '#fa220a';
export const $blue = '#108ee9';
export const $orange = '#ff976a';
export const $orange_dark = '#ed6a0c';
export const $orange_light = '#fffbe8';
export const $green = '#07c160';

// Gradient Colors
export const $gradient_red = 'linear-gradient(to right, #ff6034, #ee0a24)';
export const $gradient_orange = 'linear-gradient(to right, #ffd01e, #ff8917)';

// Component Colors
export const $text_color = $gray8;
export const $active_color = $gray2;
export const $active_opacity = '0.7';
export const $disabled_opacity = '0.5';
export const $background_color = $gray1;
export const $background_color_light = '#fafafa';
export const $textLink_color = '#576b95';

// Padding
const _padding_base = 4 / 16;
export const $padding_base = `${_padding_base}rem`;
export const $padding_xs = `${_padding_base * 2}rem`;
export const $padding_sm = `${_padding_base * 3}rem`;
export const $padding_md = `${_padding_base * 4}rem`;
export const $padding_lg = `${_padding_base * 6}rem`;
export const $padding_xl = `${_padding_base * 8}rem`;

// Font
export const $font_size_xs = '0.625rem';
export const $font_size_sm = '0.75rem';
export const $font_size_md = '0.875rem';
export const $font_size_lg = '1rem';
export const $font_weight_bold = '500';
export const $line_height_xs = '0.875rem';
export const $line_height_sm = '1.125rem';
export const $line_height_md = '1.25rem';
export const $line_height_lg = '1.375rem';
export const $base_font_family = `-apple-system, BlinkMacSystemFont, 'Helvetica Neue',
  Helvetica, Segoe UI, Arial, Roboto, 'PingFang SC', 'Hiragino Sans GB',
  'Microsoft Yahei', sans-serif`;
export const $price_integer_font_family = `Avenir-Heavy, PingFang SC, Helvetica Neue, Arial,
  sans-serif`;

// Animation
export const $animation_duration_base = '0.3s';
export const $animation_duration_fast = '0.2s';
export const $animation_timing_function_enter = 'ease-out';
export const $animation_timing_function_leave = 'ease-in';

// ActionSheet
export const $action_sheet = {
    max_height: '80%',
    header_height: '3rem',
    header_font_size: $font_size_lg,
    description_color: $gray6,
    description_font_size: $font_size_md,
    description_line_height: $line_height_md,
    item_background: $white,
    item_font_size: $font_size_lg,
    item_line_height: $line_height_lg,
    item_text_color: $text_color,
    item_disabled_text_color: $gray5,
    subname_color: $gray6,
    subname_font_size: $font_size_sm,
    subname_line_height: $line_height_sm,
    close_icon_size: '1.375rem',
    close_icon_color: $gray5,
    close_icon_active_color: $gray6,
    close_icon_padding: `0 ${$padding_md}`,
    cancel_text_color: $gray7,
    cancel_padding_top: $padding_xs,
    cancel_padding_color: $background_color,
    loading_icon_size: '1.375rem',
};

// Border
export const $border_color = $gray3;
export const $border_width_base = '0.0625rem';
export const $border_radius_sm = '0.125rem';
export const $border_radius_md = '0.25rem';
export const $border_radius_lg = '0.5rem';
export const $border_radius_max = '62.4375rem';

type CSSProperties = Record<string, string | number>;

// Loading
export const $loading: CSSProperties = {
    loading_text_color: `${$gray6}`,
    loading_text_font_size: `${$font_size_md}`,
    loading_spinner_color: `${$gray5}`,
    loading_spinner_size: '1.875rem',
    loading_spinner_animation_duration: '0.8s',
};

// Button
export const $button: CSSProperties = {
    button_mini_height: '1.5rem',
    button_mini_font_size: `${$font_size_xs}`,
    button_small_height: '2rem',
    button_small_font_size: `${$font_size_sm}`,
    button_normal_font_size: `${$font_size_md}`,
    button_large_height: '3.125rem',
    button_default_height: '2.75rem',
    button_default_line_height: '1.2',
    button_default_font_size: `${$font_size_lg}`,
    button_default_color: `${$text_color}`,
    button_default_background_color: `${$white}`,
    button_default_border_color: `${$border_color}`,
    button_primary_color: `${$white}`,
    button_primary_background_color: `${$green}`,
    button_primary_border_color: `${$green}`,
    button_info_color: `${$white}`,
    button_info_background_color: `${$blue}`,
    button_info_border_color: `${$blue}`,
    button_danger_color: `${$white}`,
    button_danger_background_color: `${$red}`,
    button_danger_border_color: `${$red}`,
    button_warning_color: `${$white}`,
    button_warning_background_color: `${$orange}`,
    button_warning_border_color: `${$orange}`,
    button_border_width: `${$border_width_base}`,
    button_border_radius: `${$border_radius_sm}`,
    button_round_border_radius: `${$border_radius_max}`,
    button_plain_background_color: `${$white}`,
    button_disabled_opacity: `${$disabled_opacity}`,
};

// Card
export const $card: CSSProperties = {
    padding: `${$padding_xs} ${$padding_md}`,
    font_size: `${$font_size_sm}`,
    text_color: `${$text_color}`,
    background_color: `${$background_color_light}`,
    thumb_size: `5.5rem`,
    thumb_border_radius: `${$border_radius_lg}`,
    title_line_height: `1rem`,
    desc_color: `${$gray7}`,
    desc_line_height: `${$line_height_md}`,
    price_color: `${$gray8}`,
    origin_price_color: `${$gray6}`,
    num_color: `${$gray6}`,
    origin_price_font_size: `${$font_size_xs}`,
    price_font_size: `${$font_size_sm}`,
    price_integer_font_size: `${$font_size_lg}`,
    price_font_family: `${$price_integer_font_family}`,
};

// Cell
export const $cell: CSSProperties = {
    font_size: `${$font_size_md}`,
    line_height: `1.5rem`,
    vertical_padding: `0.625rem`,
    horizontal_padding: `${$padding_md}`,
    text_color: `${$text_color}`,
    background_color: `${$white}`,
    border_color: `${$border_color}`,
    active_color: `${$active_color}`,
    required_color: `${$red}`,
    label_color: `${$gray6}`,
    label_font_size: `${$font_size_sm}`,
    label_line_height: `${$line_height_sm}`,
    label_margin_top: `${$padding_base}`,
    value_color: `${$gray6}`,
    icon_size: `1rem`,
    right_icon_color: `${$gray6}`,
    large_vertical_padding: `${$padding_sm}`,
    large_title_font_size: `${$font_size_lg}`,
    large_label_font_size: `${$font_size_md}`,
};

// CellGroup
export const $cell_group: CSSProperties = {
    background_color: `${$white}`,
    title_color: `${$gray6}`,
    title_padding: `${$padding_md} ${$padding_md} ${$padding_xs}`,
    title_font_size: `${$font_size_md}`,
    title_line_height: `1rem`,
};

// Checkbox
export const $checkbox: CSSProperties = {
    size: `1.25rem`,
    border_color: `${$gray5}`,
    transition_duration: `${$animation_duration_fast}`,
    label_margin: `${$padding_xs}`,
    label_color: `${$text_color}`,
    checked_icon_color: `${$blue}`,
    disabled_icon_color: `${$gray5}`,
    disabled_label_color: `${$gray5}`,
    disabled_background_color: `${$border_color}`,
};

// Tab
export const $tab: CSSProperties = {
    $tab_text_color: $gray7,
    $tab_active_text_color: $text_color,
    $tab_disabled_text_color: $gray5,
    $tab_font_size: $font_size_md,
};

// Tabs
export const $tabs: CSSProperties = {
    $tabs_default_color: $red,
    $tabs_line_height: '2.75rem',
    $tabs_card_height: '1.875rem',
    $tabs_nav_background_color: $white,
    $tabs_bottom_bar_height: '0.1875rem',
    $tabs_bottom_bar_color: $red,
};

export const $tag: CSSProperties = {
    // Tag
    padding: `0 ${$padding_base}`,
    text_color: `${$white}`,
    font_size: `${$font_size_sm}`,
    border_radius: `0.125rem`,
    line_height: `1rem`,
    medium_padding: `0.125rem 0.375rem`,
    large_padding: `${$padding_base} ${$padding_xs}`,
    large_border_radius: `${$border_radius_md}`,
    large_font_size: `${$font_size_md}`,
    round_border_radius: `${$border_radius_max}`,
    danger_color: `${$red}`,
    primary_color: `${$blue}`,
    success_color: `${$green}`,
    warning_color: `${$orange}`,
    default_color: `${$gray6}`,
    plain_background_color: `${$white}`,
};

export const $image: CSSProperties = {
    placeholder_text_color: `${$gray6}`,
    placeholder_font_size: `${$font_size_md}`,
    placeholder_background_color: `${$background_color}`,
    loading_icon_size: `1.375rem`,
    error_icon_size: `1.375rem`,
};

// NavBar
export const $nav_bar: CSSProperties = {
    height: `2.875rem`,
    background_color: `${$white}`,
    arrow_size: `1rem`,
    icon_color: `${$blue}`,
    text_color: `${$blue}`,
    title_font_size: `${$font_size_lg}`,
    title_text_color: `${$text_color}`,
    z_index: 1,
};

// NoticeBar
export const $notice_bar: CSSProperties = {
    height: '2.5rem',
    padding: `0 ${$padding_md}`,
    wrapable_padding: `${$padding_xs} ${$padding_md}`,
    text_color: `${$orange_dark}`,
    font_size: `${$font_size_md}`,
    line_height: '1.5rem',
    background_color: `${$orange_light}`,
    icon_size: '1rem',
    icon_min_width: '1.5rem',
};

// Notify
export const $notify: CSSProperties = {
    text_color: `${$white}`,
    padding: `${$padding_xs} ${$padding_md}`,
    font_size: `${$font_size_md}`,
    line_height: `${$line_height_md}`,
    primary_background_color: `${$blue}`,
    success_background_color: `${$green}`,
    danger_background_color: `${$red}`,
    warning_background_color: `${$orange}`,
};

// Empty
export const $empty = {
    empty_padding: `${$padding_xl} 0`,
    empty_image_size: '10rem',
    empty_description_margin_top: `${$padding_md}`,
    empty_description_padding: '0 3.75rem',
    empty_description_color: `${$gray6}`,
    empty_description_font_size: `${$font_size_md}`,
    empty_description_line_height: `${$line_height_md}`,
    empty_bottom_margin_top: '1.5rem',
};

// Popup
export const $popup = {
    popup_background_color: `${$white}`,
    popup_transition: `transform ${$animation_duration_base}`,
    popup_round_border_radius: '1.25rem',
    popup_close_icon_size: '1.375rem',
    popup_close_icon_color: `${$gray5}`,
    popup_close_icon_active_color: `${$gray6}`,
    popup_close_icon_margin: '1rem',
    popup_close_icon_z_index: '1',
};

// Step
export const $step = {
    step_text_color: $gray6,
    step_active_color: $green,
    step_process_text_color: $text_color,
    step_font_size: $font_size_md,
    step_line_color: $border_color,
    step_finish_line_color: $green,
    step_finish_text_color: $text_color,
    step_icon_size: '0.75rem',
    step_circle_size: '0.3125rem',
    step_circle_color: $gray6,
    step_horizontal_title_font_size: $font_size_sm,
};

// Steps
export const $steps = {
    steps_background_color: $white,
};

// Sticky
export const $sticky_z_index = 99;

// Stepper
export const $stepper: CSSProperties = {
    stepper_active_color: '#e8e8e8',
    stepper_background_color: $active_color,
    stepper_button_icon_color: $text_color,
    stepper_button_disabled_color: $background_color,
    stepper_button_disabled_icon_color: $gray5,
    stepper_button_round_theme_color: $red,
    stepper_button_round_color: $white,
    stepper_input_width: '2rem',
    stepper_input_height: '1.75rem',
    stepper_input_font_size: $font_size_md,
    stepper_input_line_height: 'normal',
    stepper_input_text_color: $text_color,
    stepper_input_disabled_text_color: $gray5,
    stepper_input_disabled_background_color: $active_color,
    stepper_border_radius: $border_radius_md,
};

// Overlay
export const $overlay: CSSProperties = {
    overlay_z_index: 1,
    overlay_background_color: 'rgba(0, 0, 0, 0.7)',
};

// List
export const $list: CSSProperties = {
    $list_icon_margin_right: '0.3125rem',
    $list_text_color: `${$gray6}`,
    $list_text_font_size: `${$font_size_md}`,
    $list_text_line_height: '3.125rem',
};

// Picker
export const $picker: CSSProperties = {
    picker_background_color: `${$white}`,
    picker_toolbar_height: '2.75rem',
    picker_title_font_size: `${$font_size_lg}`,
    picker_title_line_height: '1.25rem',
    picker_action_padding: `${$padding_md}`,
    picker_action_font_size: `${$font_size_md}`,
    picker_confirm_action_color: `${$textLink_color}`,
    picker_cancel_action_color: `${$gray6}`,
    picker_option_font_size: `${$font_size_lg}`,
    picker_option_text_color: `${$black}`,
    picker_option_disabled_opacity: '0.3',
    picker_loading_icon_color: `${$blue}`,
    picker_loading_mask_color: 'rgba(255, 255, 255, 0.9)',
};

// Sidebar
export const $sidebar: CSSProperties = {
    sidebar_width: '5rem',
    sidebar_padding: `1.25rem ${$padding_sm}`,
    sidebar_text_color: `${$text_color}`,
    sidebar_font_size: `${$font_size_md}`,
    sidebar_line_height: `${$line_height_md}`,
    sidebar_background_color: `${$background_color}`,
    sidebar_active_color: `${$active_color}`,
    sidebar_selected_text_color: `${$text_color}`,
    sidebar_selected_font_weight: `${$font_weight_bold}`,
    sidebar_selected_background_color: `${$white}`,
    sidebar_selected_border_width: `0.25rem`,
    sidebar_selected_border_height: `1rem`,
    sidebar_selected_border_color: `${$red}`,
    sidebar_disabled_text_color: `${$gray5}`,
};

// Progress
export const $progress: CSSProperties = {
    height: '0.25rem',
    color: `${$blue}`,
    background_color: `${$gray3}`,
    pivot_padding: '0 0.3125rem',
    pivot_text_color: `${$white}`,
    pivot_font_size: `${$font_size_xs}`,
    pivot_line_height: '1.6',
    pivot_background_color: `${$blue}`,
};

// Rate
export const $rate: CSSProperties = {
    icon_size: `1.25rem`,
    icon_gutter: `${$padding_base}`,
    icon_void_color: `${$gray5}`,
    icon_full_color: `${$red}`,
    icon_disabled_color: `${$gray5}`,
};

// Field
export const $field: CSSProperties = {
    label_margin_right: `${$padding_sm}`,
    label_width: '6.2em',
    label_color: `${$gray7}`,
    disabled_text_color: `${$gray5}`,
    input_text_color: `${$text_color}`,
    placeholder_text_color: `${$gray5}`,
    input_disabled_text_color: `${$gray5}`,
    input_error_text_color: `${$red}`,
    clear_icon_color: `${$gray5}`,
    clear_icon_size: '1rem',
    icon_size: '1rem',
    right_icon_color: `${$gray6}`,
    error_message_color: `${$red}`,
    error_message_text_size: '0.75rem',
    word_limit_color: `${$gray7}`,
    word_limit_font_size: `${$font_size_sm}`,
    word_limit_line_height: '1rem',
    text_area_min_height: '3.75rem',
    cell_line_height: '1.5rem',
    cell_border_color: `${$gray3}`,
};

// Uploader
export const $uploader: CSSProperties = {
    size: '5rem',
    icon_size: '1.5rem',
    icon_color: $gray4,
    text_color: $gray6,
    text_font_size: $font_size_xs,
    upload_background_color: $gray1,
    upload_active_color: $active_color,
    delete_color: $white,
    delete_icon_size: '0.875rem',
    delete_background_color: 'rgba(0, 0, 0, 0.7)',
    file_background_color: $background_color,
    file_icon_size: '1.25rem',
    file_icon_color: $gray7,
    file_name_padding: `0 ${$padding_base}`,
    file_name_margin_top: $padding_xs,
    file_name_font_size: $font_size_sm,
    file_name_text_color: $gray7,
    mask_background_color: 'rgba(50, 50, 51, 0.88)',
    mask_icon_size: '1.375rem',
    mask_message_font_size: $font_size_sm,
    mask_message_line_height: $line_height_xs,
    loading_icon_size: '1.375rem',
    loading_icon_color: $white,
    disabled_opacity: $disabled_opacity,
};

// Search
export const $search: CSSProperties = {
    padding: `0.625rem ${$padding_sm}`,
    background_color: $white,
    content_background_color: $gray1,
    input_height: '2.125rem',
    label_padding: '0 0.3125rem',
    label_color: $text_color,
    label_font_size: $font_size_md,
    left_icon_color: $gray6,
    action_padding: `0 ${$padding_xs}`,
    action_text_color: $text_color,
    action_font_size: $font_size_md,
};

// SubmitBar
export const $submit_bar: CSSProperties = {
    height: '3.125rem',
    z_index: 100,
    background_color: $white,
    button_width: '6.875rem',
    price_color: $red,
    price_font_size: $font_size_md,
    currency_font_size: $font_size_md,
    text_color: $text_color,
    text_font_size: $font_size_md,
    tip_padding: `${$padding_xs} ${$padding_sm}`,
    tip_font_size: $font_size_sm,
    tip_line_height: 1.5,
    tip_color: '#f56723',
    tip_background_color: '#fff7cc',
    tip_icon_size: '0.75rem',
    button_height: '2.5rem',
    padding: `0 ${$padding_md}`,
    price_integer_font_size: '1.25rem',
    price_font_family: $price_integer_font_family,
};

// DropdownMenu
export const $dropdown_menu: CSSProperties = {
    height: '3rem',
    background_color: `${$white}`,
    z_index: 10,
    title_disabled_text_color: `${$gray6}`,
    title_padding: `0 ${$padding_xs}`,
    title_text_color: `${$text_color}`,
    title_font_size: '0.9375rem',
    title_line_height: `${$line_height_lg}`,
    title_active_text_color: `${$red}`,
    option_active_color: `${$red}`,
    content_max_height: '80%',
};

// Coupon
export const $coupon: CSSProperties = {
    margin: `0 ${$padding_sm} ${$padding_sm}`,
    content_height: '5.25rem',
    content_padding: '0.875rem 0',
    background_color: '#fee9e6',
    disabled_background_color: '#dddddd',
    disabled_color: '#bbbbbb',
    active_background_color: $active_color,
    border_radius: $border_radius_lg,
    box_shadow: `0 0 0.25rem rgba(0, 0, 0, 0.1)`,
    head_width: '6rem',
    amount_color: $red,
    amount_font_size: '2.1875rem',
    currency_font_size: '40%',
    name_font_size: $font_size_md,
    disabled_text_color: $gray6,
    description_padding: `${$padding_xs} ${$padding_md}`,
    description_border_color: $border_color,
    font_weight_bold: 600,
};

// CouponCell
export const $coupon_cell: CSSProperties = {
    selected_text_color: $text_color,
};

// CouponList
export const $coupon_list: CSSProperties = {
    background_color: $background_color,
    field_padding: `0.3125rem 0 0.3125rem ${$padding_md}`,
    exchange_button_height: '2rem',
    close_button_height: '2.5rem',
    empty_image_size: '12.5rem',
    empty_tip_color: $gray6,
    empty_tip_font_size: $font_size_md,
    empty_tip_line_height: $line_height_md,
};
// divider
export const $divider: CSSProperties = {
    border_color: $gray3,
    color: $gray6,
    font_size: $font_size_md,
    line_height: '1.5rem',
    margin: `${$padding_md} 0`,
    content_padding: $padding_md,
    content_left_width: '10%',
    content_right_width: '10%',
};

// skeleton
export const $skeleton: CSSProperties = {
    row_height: '1rem',
    row_margin_top: $padding_sm,
    row_background_color: $gray2,
    avatar_background_color: $gray2,
    animation_duration: '1.2s',
};

// switch
export const $switch: CSSProperties = {
    width: '2em',
    height: '1em',
    node_size: '1em',
    font_size: '1.875rem',
    border: '0.0625rem solid rgba(0, 0, 0, 0.1)',
};

// TabbarItem
export const $tabbar_item: CSSProperties = {
    font_size: $font_size_sm,
    text_color: $gray7,
    active_color: $blue,
    line_height: 1,
    icon_size: '1.375rem',
    margin_bottom: '0.25rem',
};

// Tabbar
export const $tabbar: CSSProperties = {
    height: '3.125rem',
    z_index: 1,
    background_color: $white,
};
