/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useRef } from 'react';
import styled from 'styled-components';
import DemoSection from '@trillion/muld-tools/site/mobile/layout/DemoSection';
import DemoBlock from '@trillion/muld-tools/site/mobile/layout/DemoBlock';
import CountDown from '..';
import Row from '../../row';
import Col from '../../col';
import Icon from '../../icon';
import { $white, $red, $padding_md } from '../../style/var';

export default function CountDownDemo(): React.ReactElement {
    const time = 30 * 60 * 60 * 1000;

    const countDownRef = useRef<HTMLDivElement>(null);

    const onStart = () => {
        countDownRef.current.start();
    };

    const onPause = () => {
        countDownRef.current.pause();
    };

    const onReset = () => {
        countDownRef.current.reset();
    };

    const onChange = (value: string) => {
        console.log('change', value);
    };

    const onFinish = () => {
        console.log('finished');
    };

    return (
        <View className="demo-count-down">
            <DemoBlock title="基础用法">
                <div className="demo-count-down-row">
                    <CountDown time={time} />
                </div>
            </DemoBlock>

            <DemoBlock title="倒计时事件">
                <div className="demo-count-down-row">
                    <CountDown time={3 * 1000} onChange={onChange} onFinish={onFinish} />
                </div>
            </DemoBlock>

            <DemoBlock title="自定义格式">
                <div className="demo-count-down-row">
                    <CountDown time={time} format="DD 天 HH 时 mm 分 ss 秒" />
                </div>
            </DemoBlock>

            <DemoBlock title="验证码倒计时">
                <div className="demo-count-down-row">
                    <CountDown time={60 * 1000} format="还剩 ss 秒" />
                </div>
            </DemoBlock>

            <DemoBlock title="不自动倒计时">
                <div className="demo-count-down-row">
                    <CountDown time={time} autoStart={false} format="DD 天 HH 时 mm 分 ss 秒" />
                </div>
            </DemoBlock>

            <DemoBlock title="毫秒级渲染">
                <div className="demo-count-down-row">
                    <CountDown millisecond time={time} format="HH:mm:ss:SS" />
                </div>
            </DemoBlock>

            <DemoBlock title="自定义样式">
                <div className="demo-count-down-row">
                    <CountDown time={time} format="HH:mm:ss:SS">
                        <span className="block">hours</span>
                        <span className="colon">:</span>
                        <span className="block">minutes</span>
                        <span className="colon">:</span>
                        <span className="block">seconds</span>
                    </CountDown>
                </div>
            </DemoBlock>

            <DemoBlock title="手动控制">
                <div className="demo-count-down-row">
                    <CountDown
                        ref={countDownRef}
                        cRef={countDownRef}
                        time={10 * 1000}
                        millisecond
                        format="ss:SSS"
                    ></CountDown>
                    <Row>
                        <Col span="7" offset="1">
                            <Icon name="play-circle-o" size="30" onClick={onStart}></Icon>
                        </Col>
                        <Col span="8">
                            <Icon name="pause-circle-o" size="30" onClick={onPause}></Icon>
                        </Col>
                        <Col span="6">
                            <Icon name="replay" size="30" onClick={onReset}></Icon>
                        </Col>
                    </Row>
                </div>
            </DemoBlock>
        </View>
    );
}

const View = styled(DemoSection)`
&.demo-count-down {
  background-color: ${$white};

  .mul-count-down {
    margin-left: ${$padding_md};
  }

  .colon {
    display: inline-block;
    margin: 0 0.25rem;
    color: ${$red};
  }

  .block {
    display: inline-block;
    width: 1.375rem;
    line-height: 1.25rem;
    height: 1.25rem;
    color: #fff;
    font-size: 0.75rem;
    text-align: center;
    background-color: ${$red};
    border-radius: 0.25rem;
  }

  .mul-grid {
    margin-top: 0.625rem;
  }
`;
