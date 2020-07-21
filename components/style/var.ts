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
const _padding_base = 4;
export const $padding_base = `${_padding_base}px`;
export const $padding_xs = `${_padding_base * 2}px`;
export const $padding_sm = `${_padding_base * 3}px`;
export const $padding_md = `${_padding_base * 4}px`;
export const $padding_lg = `${_padding_base * 6}px`;
export const $padding_xl = `${_padding_base * 8}px`;

// Font
export const $font_size_xs = '10px';
export const $font_size_sm = '12px';
export const $font_size_md = '14px';
export const $font_size_lg = '16px';
export const $font_weight_bold = '500';
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

// Border
export const $border_color = $gray3;
export const $border_width_base = '1px';
export const $border_radius_sm = '2px';
export const $border_radius_md = '4px';
export const $border_radius_lg = '8px';
export const $border_radius_max = '999px';

type CSSProperties = Record<string, string>;

// Loading
export const $loading: CSSProperties = {
    loading_text_color: `${$gray6}`,
    loading_text_font_size: `${$font_size_md}`,
    loading_spinner_color: `${$gray5}`,
    loading_spinner_size: '30px',
    loading_spinner_animation_duration: '0.8s',
};

// Button
export const $button: CSSProperties = {
    button_mini_height: '24px',
    button_mini_font_size: `${$font_size_xs}`,
    button_small_height: '32px',
    button_small_font_size: `${$font_size_sm}`,
    button_normal_font_size: `${$font_size_md}`,
    button_large_height: '50px',
    button_default_height: '44px',
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
