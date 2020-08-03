import styled from 'styled-components';

export const View = styled.i`
    &.mul-icon {
        position: relative;
        display: inline-block;
        font-family: 'muld-icon' !important;
        font-size: inherit;
        text-rendering: auto;
        -webkit-font-smoothing: antialiased;

        &::before {
            display: inline-block;
        }
        .mul-icon__image {
            width: 1em;
            height: 1em;
            object-fit: contain;
        }
    }

    &.mul-icon-add-o::before {
        content: '\\F000';
    }

    &.mul-icon-add-square::before {
        content: '\\F001';
    }

    &.mul-icon-add::before {
        content: '\\F002';
    }

    &.mul-icon-after-sale::before {
        content: '\\F003';
    }

    &.mul-icon-aim::before {
        content: '\\F004';
    }

    &.mul-icon-alipay::before {
        content: '\\F005';
    }

    &.mul-icon-apps-o::before {
        content: '\\F006';
    }

    &.mul-icon-arrow-down::before {
        content: '\\F007';
    }

    &.mul-icon-arrow-left::before {
        content: '\\F008';
    }

    &.mul-icon-arrow-up::before {
        content: '\\F009';
    }

    &.mul-icon-arrow::before {
        content: '\\F00A';
    }

    &.mul-icon-ascending::before {
        content: '\\F00B';
    }

    &.mul-icon-audio::before {
        content: '\\F00C';
    }

    &.mul-icon-award-o::before {
        content: '\\F00D';
    }

    &.mul-icon-award::before {
        content: '\\F00E';
    }

    &.mul-icon-bag-o::before {
        content: '\\F00F';
    }

    &.mul-icon-bag::before {
        content: '\\F010';
    }

    &.mul-icon-balance-list-o::before {
        content: '\\F011';
    }

    &.mul-icon-balance-list::before {
        content: '\\F012';
    }

    &.mul-icon-balance-o::before {
        content: '\\F013';
    }

    &.mul-icon-balance-pay::before {
        content: '\\F014';
    }

    &.mul-icon-bar-chart-o::before {
        content: '\\F015';
    }

    &.mul-icon-bars::before {
        content: '\\F016';
    }

    &.mul-icon-bell::before {
        content: '\\F017';
    }

    &.mul-icon-bill-o::before {
        content: '\\F018';
    }

    &.mul-icon-bill::before {
        content: '\\F019';
    }

    &.mul-icon-birthday-cake-o::before {
        content: '\\F01A';
    }

    &.mul-icon-bookmark-o::before {
        content: '\\F01B';
    }

    &.mul-icon-bookmark::before {
        content: '\\F01C';
    }

    &.mul-icon-browsing-history-o::before {
        content: '\\F01D';
    }

    &.mul-icon-browsing-history::before {
        content: '\\F01E';
    }

    &.mul-icon-brush-o::before {
        content: '\\F01F';
    }

    &.mul-icon-bulb-o::before {
        content: '\\F020';
    }

    &.mul-icon-bullhorn-o::before {
        content: '\\F021';
    }

    &.mul-icon-calender-o::before {
        content: '\\F022';
    }

    &.mul-icon-card::before {
        content: '\\F023';
    }

    &.mul-icon-cart-circle-o::before {
        content: '\\F024';
    }

    &.mul-icon-cart-circle::before {
        content: '\\F025';
    }

    &.mul-icon-cart-o::before {
        content: '\\F026';
    }

    &.mul-icon-cart::before {
        content: '\\F027';
    }

    &.mul-icon-cash-back-record::before {
        content: '\\F028';
    }

    &.mul-icon-cash-on-deliver::before {
        content: '\\F029';
    }

    &.mul-icon-cashier-o::before {
        content: '\\F02A';
    }

    &.mul-icon-certificate::before {
        content: '\\F02B';
    }

    &.mul-icon-chart-trending-o::before {
        content: '\\F02C';
    }

    &.mul-icon-chat-o::before {
        content: '\\F02D';
    }

    &.mul-icon-chat::before {
        content: '\\F02E';
    }

    &.mul-icon-checked::before {
        content: '\\F02F';
    }

    &.mul-icon-circle::before {
        content: '\\F030';
    }

    &.mul-icon-clear::before {
        content: '\\F031';
    }

    &.mul-icon-clock-o::before {
        content: '\\F032';
    }

    &.mul-icon-clock::before {
        content: '\\F033';
    }

    &.mul-icon-close::before {
        content: '\\F034';
    }

    &.mul-icon-closed-eye::before {
        content: '\\F035';
    }

    &.mul-icon-cluster-o::before {
        content: '\\F036';
    }

    &.mul-icon-cluster::before {
        content: '\\F037';
    }

    &.mul-icon-column::before {
        content: '\\F038';
    }

    &.mul-icon-comment-circle-o::before {
        content: '\\F039';
    }

    &.mul-icon-comment-circle::before {
        content: '\\F03A';
    }

    &.mul-icon-comment-o::before {
        content: '\\F03B';
    }

    &.mul-icon-comment::before {
        content: '\\F03C';
    }

    &.mul-icon-completed::before {
        content: '\\F03D';
    }

    &.mul-icon-contact::before {
        content: '\\F03E';
    }

    &.mul-icon-coupon-o::before {
        content: '\\F03F';
    }

    &.mul-icon-coupon::before {
        content: '\\F040';
    }

    &.mul-icon-credit-pay::before {
        content: '\\F041';
    }

    &.mul-icon-cross::before {
        content: '\\F042';
    }

    &.mul-icon-debit-pay::before {
        content: '\\F043';
    }

    &.mul-icon-delete::before {
        content: '\\F044';
    }

    &.mul-icon-descending::before {
        content: '\\F045';
    }

    &.mul-icon-description::before {
        content: '\\F046';
    }

    &.mul-icon-desktop-o::before {
        content: '\\F047';
    }

    &.mul-icon-diamond-o::before {
        content: '\\F048';
    }

    &.mul-icon-diamond::before {
        content: '\\F049';
    }

    &.mul-icon-discount::before {
        content: '\\F04A';
    }

    &.mul-icon-down::before {
        content: '\\F04B';
    }

    &.mul-icon-ecard-pay::before {
        content: '\\F04C';
    }

    &.mul-icon-edit::before {
        content: '\\F04D';
    }

    &.mul-icon-ellipsis::before {
        content: '\\F04E';
    }

    &.mul-icon-empty::before {
        content: '\\F04F';
    }

    &.mul-icon-enlarge::before {
        content: '\\F0E4';
    }

    &.mul-icon-envelop-o::before {
        content: '\\F050';
    }

    &.mul-icon-exchange::before {
        content: '\\F051';
    }

    &.mul-icon-expand-o::before {
        content: '\\F052';
    }

    &.mul-icon-expand::before {
        content: '\\F053';
    }

    &.mul-icon-eye-o::before {
        content: '\\F054';
    }

    &.mul-icon-eye::before {
        content: '\\F055';
    }

    &.mul-icon-fail::before {
        content: '\\F056';
    }

    &.mul-icon-failure::before {
        content: '\\F057';
    }

    &.mul-icon-filter-o::before {
        content: '\\F058';
    }

    &.mul-icon-fire-o::before {
        content: '\\F059';
    }

    &.mul-icon-fire::before {
        content: '\\F05A';
    }

    &.mul-icon-flag-o::before {
        content: '\\F05B';
    }

    &.mul-icon-flower-o::before {
        content: '\\F05C';
    }

    &.mul-icon-free-postage::before {
        content: '\\F05D';
    }

    &.mul-icon-friends-o::before {
        content: '\\F05E';
    }

    &.mul-icon-friends::before {
        content: '\\F05F';
    }

    &.mul-icon-gem-o::before {
        content: '\\F060';
    }

    &.mul-icon-gem::before {
        content: '\\F061';
    }

    &.mul-icon-gift-card-o::before {
        content: '\\F062';
    }

    &.mul-icon-gift-card::before {
        content: '\\F063';
    }

    &.mul-icon-gift-o::before {
        content: '\\F064';
    }

    &.mul-icon-gift::before {
        content: '\\F065';
    }

    &.mul-icon-gold-coin-o::before {
        content: '\\F066';
    }

    &.mul-icon-gold-coin::before {
        content: '\\F067';
    }

    &.mul-icon-good-job-o::before {
        content: '\\F068';
    }

    &.mul-icon-good-job::before {
        content: '\\F069';
    }

    &.mul-icon-goods-collect-o::before {
        content: '\\F06A';
    }

    &.mul-icon-goods-collect::before {
        content: '\\F06B';
    }

    &.mul-icon-graphic::before {
        content: '\\F06C';
    }

    &.mul-icon-home-o::before {
        content: '\\F06D';
    }

    &.mul-icon-hot-o::before {
        content: '\\F06E';
    }

    &.mul-icon-hot-sale-o::before {
        content: '\\F06F';
    }

    &.mul-icon-hot-sale::before {
        content: '\\F070';
    }

    &.mul-icon-hot::before {
        content: '\\F071';
    }

    &.mul-icon-hotel-o::before {
        content: '\\F072';
    }

    &.mul-icon-idcard::before {
        content: '\\F073';
    }

    &.mul-icon-info-o::before {
        content: '\\F074';
    }

    &.mul-icon-info::before {
        content: '\\F075';
    }

    &.mul-icon-invition::before {
        content: '\\F076';
    }

    &.mul-icon-label-o::before {
        content: '\\F077';
    }

    &.mul-icon-label::before {
        content: '\\F078';
    }

    &.mul-icon-like-o::before {
        content: '\\F079';
    }

    &.mul-icon-like::before {
        content: '\\F07A';
    }

    &.mul-icon-live::before {
        content: '\\F07B';
    }

    &.mul-icon-location-o::before {
        content: '\\F07C';
    }

    &.mul-icon-location::before {
        content: '\\F07D';
    }

    &.mul-icon-lock::before {
        content: '\\F07E';
    }

    &.mul-icon-logistics::before {
        content: '\\F07F';
    }

    &.mul-icon-manager-o::before {
        content: '\\F080';
    }

    &.mul-icon-manager::before {
        content: '\\F081';
    }

    &.mul-icon-map-marked::before {
        content: '\\F082';
    }

    &.mul-icon-medal-o::before {
        content: '\\F083';
    }

    &.mul-icon-medal::before {
        content: '\\F084';
    }

    &.mul-icon-more-o::before {
        content: '\\F085';
    }

    &.mul-icon-more::before {
        content: '\\F086';
    }

    &.mul-icon-music-o::before {
        content: '\\F087';
    }

    &.mul-icon-music::before {
        content: '\\F088';
    }

    &.mul-icon-new-arrival-o::before {
        content: '\\F089';
    }

    &.mul-icon-new-arrival::before {
        content: '\\F08A';
    }

    &.mul-icon-new-o::before {
        content: '\\F08B';
    }

    &.mul-icon-new::before {
        content: '\\F08C';
    }

    &.mul-icon-newspaper-o::before {
        content: '\\F08D';
    }

    &.mul-icon-notes-o::before {
        content: '\\F08E';
    }

    &.mul-icon-orders-o::before {
        content: '\\F08F';
    }

    &.mul-icon-other-pay::before {
        content: '\\F090';
    }

    &.mul-icon-paid::before {
        content: '\\F091';
    }

    &.mul-icon-passed::before {
        content: '\\F092';
    }

    &.mul-icon-pause-circle-o::before {
        content: '\\F093';
    }

    &.mul-icon-pause-circle::before {
        content: '\\F094';
    }

    &.mul-icon-pause::before {
        content: '\\F095';
    }

    &.mul-icon-peer-pay::before {
        content: '\\F096';
    }

    &.mul-icon-pending-payment::before {
        content: '\\F097';
    }

    &.mul-icon-phone-circle-o::before {
        content: '\\F098';
    }

    &.mul-icon-phone-circle::before {
        content: '\\F099';
    }

    &.mul-icon-phone-o::before {
        content: '\\F09A';
    }

    &.mul-icon-phone::before {
        content: '\\F09B';
    }

    &.mul-icon-photo-fail::before {
        content: '\\F0E5';
    }

    &.mul-icon-photo-o::before {
        content: '\\F09C';
    }

    &.mul-icon-photo::before {
        content: '\\F09D';
    }

    &.mul-icon-photograph::before {
        content: '\\F09E';
    }

    &.mul-icon-play-circle-o::before {
        content: '\\F09F';
    }

    &.mul-icon-play-circle::before {
        content: '\\F0A0';
    }

    &.mul-icon-play::before {
        content: '\\F0A1';
    }

    &.mul-icon-plus::before {
        content: '\\F0A2';
    }

    &.mul-icon-point-gift-o::before {
        content: '\\F0A3';
    }

    &.mul-icon-point-gift::before {
        content: '\\F0A4';
    }

    &.mul-icon-points::before {
        content: '\\F0A5';
    }

    &.mul-icon-printer::before {
        content: '\\F0A6';
    }

    &.mul-icon-qr-invalid::before {
        content: '\\F0A7';
    }

    &.mul-icon-qr::before {
        content: '\\F0A8';
    }

    &.mul-icon-question-o::before {
        content: '\\F0A9';
    }

    &.mul-icon-question::before {
        content: '\\F0AA';
    }

    &.mul-icon-records::before {
        content: '\\F0AB';
    }

    &.mul-icon-refund-o::before {
        content: '\\F0AC';
    }

    &.mul-icon-replay::before {
        content: '\\F0AD';
    }

    &.mul-icon-scan::before {
        content: '\\F0AE';
    }

    &.mul-icon-search::before {
        content: '\\F0AF';
    }

    &.mul-icon-send-gift-o::before {
        content: '\\F0B0';
    }

    &.mul-icon-send-gift::before {
        content: '\\F0B1';
    }

    &.mul-icon-service-o::before {
        content: '\\F0B2';
    }

    &.mul-icon-service::before {
        content: '\\F0B3';
    }

    &.mul-icon-setting-o::before {
        content: '\\F0B4';
    }

    &.mul-icon-setting::before {
        content: '\\F0B5';
    }

    &.mul-icon-share::before {
        content: '\\F0B6';
    }

    &.mul-icon-shop-collect-o::before {
        content: '\\F0B7';
    }

    &.mul-icon-shop-collect::before {
        content: '\\F0B8';
    }

    &.mul-icon-shop-o::before {
        content: '\\F0B9';
    }

    &.mul-icon-shop::before {
        content: '\\F0BA';
    }

    &.mul-icon-shopping-cart-o::before {
        content: '\\F0BB';
    }

    &.mul-icon-shopping-cart::before {
        content: '\\F0BC';
    }

    &.mul-icon-shrink::before {
        content: '\\F0BD';
    }

    &.mul-icon-sign::before {
        content: '\\F0BE';
    }

    &.mul-icon-smile-comment-o::before {
        content: '\\F0BF';
    }

    &.mul-icon-smile-comment::before {
        content: '\\F0C0';
    }

    &.mul-icon-smile-o::before {
        content: '\\F0C1';
    }

    &.mul-icon-smile::before {
        content: '\\F0C2';
    }

    &.mul-icon-star-o::before {
        content: '\\F0C3';
    }

    &.mul-icon-star::before {
        content: '\\F0C4';
    }

    &.mul-icon-stop-circle-o::before {
        content: '\\F0C5';
    }

    &.mul-icon-stop-circle::before {
        content: '\\F0C6';
    }

    &.mul-icon-stop::before {
        content: '\\F0C7';
    }

    &.mul-icon-success::before {
        content: '\\F0C8';
    }

    &.mul-icon-thumb-circle-o::before {
        content: '\\F0C9';
    }

    &.mul-icon-thumb-circle::before {
        content: '\\F0CA';
    }

    &.mul-icon-todo-list-o::before {
        content: '\\F0CB';
    }

    &.mul-icon-todo-list::before {
        content: '\\F0CC';
    }

    &.mul-icon-tosend::before {
        content: '\\F0CD';
    }

    &.mul-icon-tv-o::before {
        content: '\\F0CE';
    }

    &.mul-icon-umbrella-circle::before {
        content: '\\F0CF';
    }

    &.mul-icon-underway-o::before {
        content: '\\F0D0';
    }

    &.mul-icon-underway::before {
        content: '\\F0D1';
    }

    &.mul-icon-upgrade::before {
        content: '\\F0D2';
    }

    &.mul-icon-user-circle-o::before {
        content: '\\F0D3';
    }

    &.mul-icon-user-o::before {
        content: '\\F0D4';
    }

    &.mul-icon-video-o::before {
        content: '\\F0D5';
    }

    &.mul-icon-video::before {
        content: '\\F0D6';
    }

    &.mul-icon-vip-card-o::before {
        content: '\\F0D7';
    }

    &.mul-icon-vip-card::before {
        content: '\\F0D8';
    }

    &.mul-icon-volume-o::before {
        content: '\\F0D9';
    }

    &.mul-icon-volume::before {
        content: '\\F0DA';
    }

    &.mul-icon-wap-home-o::before {
        content: '\\F0DB';
    }

    &.mul-icon-wap-home::before {
        content: '\\F0DC';
    }

    &.mul-icon-wap-nav::before {
        content: '\\F0DD';
    }

    &.mul-icon-warn-o::before {
        content: '\\F0DE';
    }

    &.mul-icon-warning-o::before {
        content: '\\F0DF';
    }

    &.mul-icon-warning::before {
        content: '\\F0E0';
    }

    &.mul-icon-weapp-nav::before {
        content: '\\F0E1';
    }

    &.mul-icon-wechat::before {
        content: '\\F0E2';
    }

    &.mul-icon-youzan-shield::before {
        content: '\\F0E3';
    }
`;
