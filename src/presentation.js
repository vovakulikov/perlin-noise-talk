import React from 'react';
import { Presentation } from "presa";

import { baseTextColor } from "./color";

// Slides
import Intro from './slides/intro';
import Agenda from './slides/agenda';
import PerlinNoiseCall from './slides/perlin-noise-code-call';
import PerlinNoiseIs from './slides/perlin-noise-is';
import PrefaceOfRandom from './slides/preface-of-random';
import NormalDefinition from './slides/normal-definition';
import Special from './slides/special-thing-of-perlin-noise';
import MainIdea from './slides/main-idea-of-perlin';
import HorizonralDemo, { CodeDemo } from './slides/horizontal-ball-demo';
import InteractiveNoiseChart from './slides/interactive-noise-chart'
import ClassicPerlinNoiseCloud, { CloudCode } from './slides/classic-perlin-noise-cloud'
import RandomBall, { QuickFix, QuickFixChart, Explanation } from './slides/random-ball'
import BrokenBall, { CodeDemo as BrokenCodeBallDemo } from './slides/broken-ball'
import BezierExample, { BizierCodeExample } from './slides/bezier-example'
import TwoDimensionalNoise from './slides/two-dimension-noise'
import TwoDimensionalNoiseChart from './slides/two-dimensional-chart'
import TwoDimensionalNoiseDemo, { ArtifactProblemChart } from './slides/two-dimensional-demo'
import FixedTwoDimensionalNoiseDemo, { CodeExample } from './slides/fixed-two-dimensional-noise-demo'
import SecondTwoDimensionalNoiseDemo from './slides/second-two-dimensional-demo'
import ThreeDemesionalNoise, { ThreeDemesionalNoiseChart } from './slides/three-dimensional-noise'
import ReachDemo from './slides/reach-noise-demo'
import LiveDemo from './slides/live-editor-demo-link'
import ThreeDimensionalPerlinNoiseDemo from './slides/three-dimensional-demo';

export default function PitchDesk() {
    return (
     <Presentation
        name="Perlin noise"
        tableOfContents
        useFullscreenAPI
        theme={{ textColor: baseTextColor }}>

         <Intro name="The first one" />

         <Agenda name={'Agenda'}/>

         <PerlinNoiseIs name={'Wiki definition'}/>

         <PerlinNoiseCall name={'API ex'}/>

         <MainIdea name={'Main idea'}/>

         <NormalDefinition name={'The normal definition'}/>

         <PrefaceOfRandom name={'Preface'}/>

         <InteractiveNoiseChart name={'Interactive Chart'}/>

         <Special name={'Perlin is pure'} />

         <HorizonralDemo name={'Horizontal Demo Ball'}/>

         <CodeDemo name={'Horizontal Code'}/>

         <BrokenCodeBallDemo name={'Broken Code Demo'}/>

         <BrokenBall name={'Broken Ball'}/>

         <Explanation name={'Explanation of problem '}/>

         <QuickFixChart name={'Quick fix chart'}/>

         <QuickFix name={'Fix ball'}/>

         <RandomBall name={'Crazy ball'}/>

         <BezierExample name={'Bezier ex'}/>

         <BizierCodeExample name={'Bezier ex code'} />

         <TwoDimensionalNoise name={'Two dimensional noise'}/>

         <TwoDimensionalNoiseChart name={'Two dimensional noise Charts'}/>

         <ClassicPerlinNoiseCloud name={'Classic cloud'}/>

         <CloudCode name={'Classic cloud code'}/>

         <TwoDimensionalNoiseDemo name={'Two dimensional noise ex'}/>

         <ArtifactProblemChart name={'Artifact problem'}/>

         <FixedTwoDimensionalNoiseDemo name={'Fixed two dimensional noise ex'}/>

         <CodeExample name={'Fixed two dimensional noise ex Code'}/>

         <SecondTwoDimensionalNoiseDemo name={'Second two dimensional noise ex'}/>

         <ReachDemo name={'reach noise demo'}/>

         <ThreeDemesionalNoise name={'Three dimensional noise'}/>

         <ThreeDemesionalNoiseChart name={'Three dimensional noise chart'}/>

         <ThreeDimensionalPerlinNoiseDemo name={'Three dimensional noise chart demo'}/>

         <LiveDemo name={'live demo link'} />

    </Presentation>);
}
