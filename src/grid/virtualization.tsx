import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, VirtualScroll } from '@syncfusion/ej2-react-grids';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { SampleBase } from '../common/sample-base';

const SAMPLE_CSS = `
.image {
        position: absolute;
        background-repeat: no-repeat;
        background-image: url('src/grid/images/spinner.gif');
        background-position: center;
        width: 16px;
        height: 28px;
    }

    .e-bigger .image {
        height: 36px;
    }
    
    #popup {
        position: absolute;
        background-color: transparent;
        display: none;
        z-index: 100;
    }
    .div-button{
        margin: 5px 5px 5px 0;
    }

    #performanceTime {
        float: right;
        margin-top: 3px;
    }

    .e-bigger #performanceTime{
        margin-top: 8px;
    }`;

export class Virtualization extends SampleBase<{}, {}> {
    public names: string[] = ['VINET', 'TOMSP', 'HANAR', 'VICTE', 'SUPRD', 'HANAR', 'CHOPS', 'RICSU', 'WELLI','HILAA', 'ERNSH', 'CENTC',
    'OTTIK', 'QUEDE', 'RATTC', 'ERNSH', 'FOLKO', 'BLONP', 'WARTH', 'FRANK', 'GROSR', 'WHITC', 'WARTH', 'SPLIR', 'RATTC', 'QUICK', 'VINET',
    'MAGAA', 'TORTU', 'MORGK', 'BERGS', 'LEHMS', 'BERGS', 'ROMEY', 'ROMEY', 'LILAS', 'LEHMS', 'QUICK', 'QUICK', 'RICAR', 'REGGC', 'BSBEV',
    'COMMI', 'QUEDE', 'TRADH', 'TORTU', 'RATTC', 'VINET', 'LILAS', 'BLONP', 'HUNGO', 'RICAR', 'MAGAA', 'WANDK', 'SUPRD', 'GODOS', 'TORTU',
    'OLDWO', 'ROMEY', 'LONEP', 'ANATR', 'HUNGO', 'THEBI', 'DUMON', 'WANDK', 'QUICK', 'RATTC', 'ISLAT', 'RATTC', 'LONEP', 'ISLAT', 'TORTU',
    'WARTH', 'ISLAT', 'PERIC', 'KOENE', 'SAVEA', 'KOENE', 'BOLID', 'FOLKO', 'FURIB', 'SPLIR', 'LILAS', 'BONAP', 'MEREP', 'WARTH', 'VICTE',
    'HUNGO', 'PRINI', 'FRANK', 'OLDWO', 'MEREP', 'BONAP', 'SIMOB', 'FRANK', 'LEHMS', 'WHITC', 'QUICK', 'RATTC', 'FAMIA'];
    public virtualData: Object[] = [];
    public grid: GridComponent;
    public date1: number;
    public date2: number;
    public flag: boolean = true;

    public onclick() {
        if (!this.virtualData.length) {
            this.show();
            for (let i: number = 0; i < 5000; i++) {
                this.virtualData.push({
                    "FIELD1": this.names[Math.floor(Math.random() * this.names.length)],
                    "FIELD2": 1967 + (i % 10),
                    "FIELD3": Math.floor(Math.random() * 200),
                    "FIELD4": Math.floor(Math.random() * 100),
                    "FIELD5": Math.floor(Math.random() * 2000),
                    "FIELD6": Math.floor(Math.random() * 1000),
                    "FIELD7": Math.floor(Math.random() * 100),
                    "FIELD8": Math.floor(Math.random() * 10),
                    "FIELD9": Math.floor(Math.random() * 10),
                    "FIELD10": Math.floor(Math.random() * 100),
                    "FIELD11": Math.floor(Math.random() * 100),
                    "FIELD12": Math.floor(Math.random() * 1000),
                    "FIELD13": Math.floor(Math.random() * 10),
                    "FIELD14": Math.floor(Math.random() * 10),
                    "FIELD15": Math.floor(Math.random() * 1000),
                    "FIELD16": Math.floor(Math.random() * 200),
                    "FIELD17": Math.floor(Math.random() * 300),
                    "FIELD18": Math.floor(Math.random() * 400),
                    "FIELD19": Math.floor(Math.random() * 500),
                    "FIELD20": Math.floor(Math.random() * 700),
                    "FIELD21": Math.floor(Math.random() * 800),
                    "FIELD22": Math.floor(Math.random() * 1000),
                    "FIELD23": Math.floor(Math.random() * 2000),
                    "FIELD24": Math.floor(Math.random() * 150),
                    "FIELD25": Math.floor(Math.random() * 1000),
                    "FIELD26": Math.floor(Math.random() * 100),
                    "FIELD27": Math.floor(Math.random() * 400),
                    "FIELD28": Math.floor(Math.random() * 600),
                    "FIELD29": Math.floor(Math.random() * 500),
                    "FIELD30": Math.floor(Math.random() * 300),
                });
            }
            this.date1 = new Date().getTime();
            this.grid.dataSource = this.virtualData;
        } else {
            this.flag = true; 
            this.show();
            this.date1 = new Date().getTime();
            this.grid.refresh();
        }
    }
    public show() {
        document.getElementById('popup').style.display = 'inline-block';
    }
    public hide() {
        if (this.flag && this.date1){
            this.date2 = new Date().getTime();
            document.getElementById('performanceTime').innerHTML = 'Time Taken: ' + (this.date2 - this.date1) + 'ms';
            this.flag = false;
        }
        document.getElementById('popup').style.display = 'none';
    }
    render() {
        return (
            <div className='control-pane'>
                <div className='control-section'>
                    <style>
                        {SAMPLE_CSS}
                    </style>
                    <div className='div-button'>
                        <ButtonComponent cssClass={'e-info'} onClick={this.onclick.bind(this)}>Load 100K Data</ButtonComponent>
                        <span id="popup">
                            <span id="gif" className="image"></span>
                        </span>
                        <span id="performanceTime">Time Taken: 0 ms</span>
                    </div>
                    <GridComponent dataSource={[]} enableVirtualization={true} enableColumnVirtualization={true} height={600}
                        ref={g => this.grid = g} dataBound={this.hide.bind(this)}>
                        <ColumnsDirective>
                            <ColumnDirective field='FIELD1' headerText='Player Name' width='130' ></ColumnDirective>
                            <ColumnDirective field='FIELD2' headerText='Year' width='100' ></ColumnDirective>
                            <ColumnDirective field='FIELD3' headerText='Stint' width='120' ></ColumnDirective>
                            <ColumnDirective field='FIELD4' headerText='TMID' width='120' ></ColumnDirective>
                            <ColumnDirective field='FIELD5' headerText='LGID' width='120' ></ColumnDirective>
                            <ColumnDirective field='FIELD6' headerText='GP' width='120' ></ColumnDirective>
                            <ColumnDirective field='FIELD7' headerText='GS' width='120' ></ColumnDirective>
                            <ColumnDirective field='FIELD8' headerText='Minutes' width='120' ></ColumnDirective>
                            <ColumnDirective field='FIELD9' headerText='Points' width='130' ></ColumnDirective>
                            <ColumnDirective field='FIELD10' headerText='OREB' width='140' ></ColumnDirective>
                            <ColumnDirective field='FIELD11' headerText='DREB' width='140' ></ColumnDirective>
                            <ColumnDirective field='FIELD12' headerText='REB' width='130' ></ColumnDirective>
                            <ColumnDirective field='FIELD13' headerText='Assists' width='120' ></ColumnDirective>
                            <ColumnDirective field='FIELD14' headerText='Steals' width='120' ></ColumnDirective>
                            <ColumnDirective field='FIELD15' headerText='Blocks' width='120' ></ColumnDirective>
                            <ColumnDirective field='FIELD16' headerText='Turnovers' width='140' ></ColumnDirective>
                            <ColumnDirective field='FIELD17' headerText='PF' width='100' ></ColumnDirective>
                            <ColumnDirective field='FIELD18' headerText='FGA' width='150' ></ColumnDirective>
                            <ColumnDirective field='FIELD19' headerText='FGM' width='120' ></ColumnDirective>
                            <ColumnDirective field='FIELD20' headerText='FTA' width='150' ></ColumnDirective>
                            <ColumnDirective field='FIELD21' headerText='FTM' width='140' ></ColumnDirective>
                            <ColumnDirective field='FIELD22' headerText='Three Attempted' width='170' ></ColumnDirective>
                            <ColumnDirective field='FIELD23' headerText='Three Made' width='150' ></ColumnDirective>
                            <ColumnDirective field='FIELD24' headerText='Post GP' width='120' ></ColumnDirective>
                            <ColumnDirective field='FIELD25' headerText='Post GS' width='120' ></ColumnDirective>
                            <ColumnDirective field='FIELD26' headerText='Post Minutes' width='150' ></ColumnDirective>
                            <ColumnDirective field='FIELD27' headerText='Post Points' width='140' ></ColumnDirective>
                            <ColumnDirective field='FIELD28' headerText='Post OREB' width='160' ></ColumnDirective>
                            <ColumnDirective field='FIELD29' headerText='Post DREB' width='160' ></ColumnDirective>
                            <ColumnDirective field='FIELD30' headerText='Post REB' width='160' ></ColumnDirective>
                        </ColumnsDirective>
                        <Inject services={[VirtualScroll]} />
                    </GridComponent>
                </div>
                <div id="action-description">
                    <p>This sample demonstrates the Grid component with the virtual scrolling feature. Click the button at the top of the Grid
        to load data source and scroll the Grid content vertically and horizontally to load rows and columns respectively.
    </p>
                </div>
                <div id='description'>
                    <p>
                        The Grid UI virtualization allows you to render only rows and columns visible within the view-port without buffering the entire datasource.
                        Grid supports row and column virtualization.
                        To enable row virtualization, set <code><a target="_blank" className="code"
                            href="http://ej2.syncfusion.com/documentation/grid/api-grid.html#enablevirtualization-boolean">
                            enableVirtualization </a></code> property as true. For column virtualization, set <code><a target="_blank" className="code"
                                href="http://ej2.syncfusion.com/documentation/grid/api-grid.html#enablecolumnvirtualization-boolean">
                                enableColumnVirtualization
                        </a></code> property as true.
                    </p>
                    <p>
                        Note: The <code><a target="_blank" className="code"
                            href="http://ej2.syncfusion.com/documentation/grid/api-grid.html#height-string---number">
                            height</a></code> property must be defined when enabling <code><a target="_blank" className="code"
                                href="http://ej2.syncfusion.com/documentation/grid/api-grid.html#enablevirtualization-boolean">
                                enableVirtualization </a></code>.
                    </p>
                    <p>
                        In this demo, Grid enabled row and column virtualization. Click the Load 100K Data button to bind 100000 rows and 30 columns.
                    </p>
                    <p style={{ fontWeight: 500 }}>Injecting Module:</p>
                    <p>Grid component features are segregated into individual feature-wise modules. To use Virtualscrolling feature, we need to inject <code>VirtualScroll</code> modeule into the <code>services</code>.</p>
                </div>
            </div>
        )
    }
}