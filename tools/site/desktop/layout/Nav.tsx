import * as React from 'react';
import styled from 'styled-components';
import {
    getNum,
    $mul_doc_nav_width,
    $mul_doc_row_max_width,
    $mul_doc_green,
    $mul_doc_padding,
} from '../../common/style/var';

export default function Nav({ config, lang }: { config: Record<string, any>; lang: string }) {
    const { nav } = config;
    let top = 60;
    const bottom = 0;
    const onScroll = () => {
        const { pageYOffset: offset } = window;
        top = Math.max(0, 60 - offset);
    };

    const style = {
        top: `${top}px`,
        bottom: `${bottom}px`,
    };

    React.useEffect(() => {
        window.addEventListener('scroll', onScroll);
        onScroll();
    }, []);

    const [currentPath, setCurrentPath] = React.useState(window.location.hash);
    const base = lang ? `/${lang}/` : '/';
    const getContent = () => {
        return nav.map((group, index) => {
            return (
                // eslint-disable-next-line react/jsx-key
                <div key={index} className="mul-doc-nav__group">
                    <div className="mul-doc-nav__title">{group.title}</div>
                    {group.items.length > 0 &&
                        group.items.map((item, itemIndex) => {
                            const name = (item.title || item.name).split(' ');
                            return (
                                <div key={itemIndex} className="mul-doc-nav__item">
                                    <a
                                        href={`#${base}${item.path}`}
                                        className={item.path === currentPath ? 'active' : ''}
                                    >
                                        {name[0]} <span>{name.slice(1).join(' ')}</span>
                                    </a>
                                </div>
                            );
                        })}
                </div>
            );
        });
    };

    return (
        <View className="mul-doc-nav" style={style}>
            {nav.length > 0 && getContent()}
        </View>
    );
}

const View = styled.div`
    &.mul-doc-nav {
        position: fixed;
        top: 60px;
        bottom: 0;
        left: 0;
        z-index: 1;
        min-width: ${$mul_doc_nav_width};
        max-width: ${$mul_doc_nav_width};
        padding: 24px 0 72px;
        overflow-y: scroll;
        background-color: #fff;
        box-shadow: 0 8px 12px #ebedf0;

        @media (min-width: ${$mul_doc_row_max_width}) {
            left: 50%;
            margin-left: -${getNum($mul_doc_row_max_width) / 2}px;
        }

        &::-webkit-scrollbar {
            width: 6px;
            height: 6px;
            background-color: transparent;
        }

        &::-webkit-scrollbar-thumb {
            background-color: transparent;
            border-radius: 6px;
        }

        &:hover::-webkit-scrollbar-thumb {
            background-color: rgba(69, 90, 100, 0.2);
        }

        .mul-doc-nav__group {
            margin-bottom: 16px;
        }

        .mul-doc-nav__title {
            padding: 8px 0 8px ${$mul_doc_padding};
            color: #455a64;
            font-weight: 500;
            font-size: 15px;
            line-height: 28px;
        }

        .mul-doc-nav__item {
            a {
                display: block;
                margin: 0;
                padding: 8px 0 8px ${$mul_doc_padding};
                color: #455a64;
                font-size: 14px;
                line-height: 28px;
                transition: color 0.2s;

                &:hover,
                &.active {
                    color: ${$mul_doc_green};
                }

                &.active {
                    -webkit-font-smoothing: auto;
                }

                span {
                    font-size: 13px;
                }
            }
        }

        @media (max-width: 1300px) {
            &__item {
                a {
                    font-size: 13px;
                }

                &:active {
                    font-size: 14px;
                }
            }
        }
    }
`;
