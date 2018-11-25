import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, EventRenderedArgs, Inject, EventFieldsMapping, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';
import { leaveData } from './datasource';
import { DataManager, Query } from '@syncfusion/ej2-data';
import './schedule-component.css';
import { extend } from '@syncfusion/ej2-base';
import { SampleBase } from '../common/sample-base';

/**
 * Schedule normal events sample
 */

export class DefaultEvents extends SampleBase<{}, {}> {
  private scheduleObj: ScheduleComponent;
  private data: Object[] = extend([], leaveData, null, true) as Object[];
  private onEventRendered(args: EventRenderedArgs): void {
    let categoryColor: string;
    let appData: { [key: string]: Object } = args.data as { [key: string]: Object };
    let eventFields: EventFieldsMapping = this.scheduleObj.eventFields;
    let parentApp: { [key: string]: Object } = new DataManager(this.scheduleObj.eventsData).
      executeLocal(new Query().where(eventFields.id, 'equal', appData[eventFields.id] as string | number))[0] as { [key: string]: Object };
    let start: number = new Date(parentApp[eventFields.startTime] as string).setHours(0, 0, 0, 0);
    let end: number = new Date(parentApp[eventFields.endTime] as string).setHours(0, 0, 0, 0);
    if (appData.IsAllDay as boolean) {
      categoryColor = '#8e24aa';
    } else if (start !== end) {
      categoryColor = '#f57f17';
    } else {
      categoryColor = '#7fa900';
    }
    if (this.scheduleObj.currentView === 'Agenda') {
      (args.element.firstChild as HTMLElement).style.borderLeftColor = categoryColor;
    } else {
      args.element.style.backgroundColor = categoryColor;
    }
  }

  render() {
    return (
      <div className='schedule-control-section'>
        <div className='col-lg-12 control-section'>
          <div className='control-wrapper'>
            <ScheduleComponent width='100%' height='650px' ref={t => this.scheduleObj = t}
              selectedDate={new Date(2018, 1, 15)}
              eventSettings={{ dataSource: this.data }} eventRendered={this.onEventRendered.bind(this)}>
              <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
            </ScheduleComponent>
          </div>
        </div>
        <div id='action-description'>
          <p>This sample illustrates the usage of different types of events such as normal, spanned and all-day. Here, the Schedule acts
        as a leave planner for an employee to plan his upcoming leaves as well as to keep track of his previously taken time-offs
        and leaves.</p>
        </div>
        <div id='description'>
          <p>
            Schedule requires only the <code>startTime</code> and <code>endTime</code> fields as mandatory to be mapped from datasource
             and provided with proper datetime values to display the normal events in it.
             The normal events can be categorized into 3 types based on its time range and all-day type.
          </p>
          <table style={{ width: '100%' }}>
            <tr>
              <th style={{ width: '100px' }}>
                <strong>Event</strong>
              </th>
              <th>
                <strong>Description</strong>
              </th>
            </tr>
            <tr>
              <td style={{ padding: '4px 0' }}>Normal events</td>
              <td>The events that has its start and end time duration on the same date. These events are depicted in green color
                in the above sample.</td>
            </tr>
            <tr>
              <td style={{ padding: '4px 0' }}>Spanned events</td>
              <td>
                The events on which its start and end time spans over multiple days and usually displays together with all-day events. These
                events are depicted in orange color which can be seen by navigating to the next date period and are depicted
                in orange color.
              </td>
            </tr>
            <tr>
              <td style={{ padding: '4px 0' }}>All-day events</td>
              <td>
                The events that are defined as all-day in its event object by setting <code>isAllDay</code> to true.
                It usually renders at the date header section of the Schedule where no time-cells are present.
                These events are depicted in purple color.
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}