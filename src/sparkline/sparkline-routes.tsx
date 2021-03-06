import {  Route } from 'react-router-dom';
import * as React from 'react';
import { Default } from './default';
import { Series } from './series-types';
import { Axis } from './axis-types';
import { SparkGrid } from './spark-grid';
import { Customization } from './customization';
import { LiveUpdate } from './live-update';
import { RangeBand } from './range-band';


export const sparklineRoutes = (
    <div>
         <Route  path='/:theme/sparkline/default' component={ Default }/>
         <Route  path='/:theme/sparkline/series-types' component={ Series }/>
         <Route  path='/:theme/sparkline/axis-types' component={ Axis }/>
         <Route  path='/:theme/sparkline/spark-grid' component={ SparkGrid }/>
         <Route  path='/:theme/sparkline/customization' component={ Customization }/>
         <Route  path='/:theme/sparkline/live-update' component={ LiveUpdate }/>
         <Route  path='/:theme/sparkline/range-band' component={ RangeBand }/>

    </div>
)

export const sparklineCategory = {"default":{"name":"Default","category":"Sparkline"},"series-types":{"name":"Series Types","category":"Sparkline"},"axis-types":{"name":"Axis Value Types","category":"Sparkline"},"spark-grid":{"name":"Sparkline in Grid","category":"Sparkline"},"customization":{"name":"Customization","category":"Sparkline"},"live-update":{"name":"Live Update","category":"Sparkline"},"range-band":{"name":"Range Band","category":"Sparkline"},"defaultSample":"sparkline/default"}