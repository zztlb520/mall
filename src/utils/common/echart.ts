import * as echarts from 'echarts/core';
import { TitleComponent, LegendComponent, TooltipComponent } from 'echarts/components';

import type { TitleComponentOption,LegendComponentOption, TooltipComponentOption } from 'echarts/components';
import type { RadarSeriesOption } from 'echarts/charts';

import { RadarChart } from 'echarts/charts';

import { CanvasRenderer } from 'echarts/renderers';

export type EChartsOption = echarts.ComposeOption<
  TitleComponentOption | LegendComponentOption | RadarSeriesOption | TooltipComponentOption
>;

echarts.use([TitleComponent, LegendComponent, RadarChart, CanvasRenderer, TooltipComponent]);

export function setOptions(dom:HTMLElement,options:EChartsOption){
    let option = {
      tooltip:options.tooltip,
      color: options.color,
      radar: options.radar,
      series: options.series
    }
    console.log(option)
    echarts.init(dom).setOption(option);
}
