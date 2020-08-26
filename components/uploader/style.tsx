import styled from 'styled-components';
import { $uploader, $padding_xs, $white } from '../style/var';

export const View = styled.div`
    &.mul-uploader {
        position: relative;
        display: inline-block;

        .mul-uploader__wrapper {
            display: flex;
            flex-wrap: wrap;

            &--disabled {
                opacity: ${$uploader.disabled_opacity};
            }
        }

        .mul-uploader__input {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden; // to clip file-upload-button
            cursor: pointer;
            opacity: 0;

            &-wrapper {
                position: relative;
            }

            &:disabled {
                cursor: not-allowed;
            }
        }

        .mul-uploader__upload {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            box-sizing: border-box;
            width: ${$uploader.size};
            height: ${$uploader.size};
            margin: 0 ${$padding_xs} ${$padding_xs} 0;
            background-color: ${$uploader.upload_background_color};

            &:active {
                background-color: ${$uploader.upload_active_color};
            }

            &-icon {
                color: ${$uploader.icon_color};
                font-size: ${$uploader.icon_size};
            }

            &-text {
                margin-top: ${$padding_xs};
                color: ${$uploader.text_color};
                font-size: ${$uploader.text_font_size};
            }
        }

        .mul-uploader__preview {
            position: relative;
            margin: 0 ${$padding_xs} ${$padding_xs} 0;
            cursor: pointer;

            &-image {
                display: block;
                width: ${$uploader.size};
                height: ${$uploader.size};
                overflow: hidden;
            }

            .mul-uploader__preview-delete {
                position: absolute;
                top: 0;
                right: 0;
                width: ${$uploader.delete_icon_size};
                height: ${$uploader.delete_icon_size};
                background-color: ${$uploader.delete_background_color};
                border-radius: 0 0 0 0.75rem;

                .mul-uploader__preview-delete-icon {
                    position: absolute;
                    top: -0.125rem;
                    right: -0.125rem;
                    color: #fff;
                    color: ${$uploader.delete_color};
                    font-size: 1rem;
                    transform: scale(0.5);
                }
            }

            .mul-uploader-cover {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
            }
        }

        .mul-uploader__mask {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: ${$white};
            background-color: ${$uploader.mask_background_color};

            &-icon {
                font-size: ${$uploader.mask_icon_size};
            }

            &-message {
                margin-top: 0.375rem;
                padding: 0 $padding_base;
                font-size: ${$uploader.mask_message_font_size};
                line-height: ${$uploader.mask_message_line_height};
            }
        }

        &__loading {
            width: ${$uploader.loading_icon_size};
            height: ${$uploader.loading_icon_size};
            color: ${$uploader.loading_icon_color};
        }

        &__file {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: ${$uploader.size};
            height: ${$uploader.size};
            background-color: ${$uploader.file_background_color};

            &-icon {
                color: ${$uploader.file_icon_color};
                font-size: ${$uploader.file_icon_size};
            }

            &-name {
                box-sizing: border-box;
                width: 100%;
                margin-top: ${$uploader.file_name_margin_top};
                padding: ${$uploader.file_name_padding};
                color: ${$uploader.file_name_text_color};
                font-size: ${$uploader.file_name_font_size};
                text-align: center;
            }
        }
    }
`;
