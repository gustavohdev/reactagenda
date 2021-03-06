import * as React from 'react';
import JqxScheduler, { ISchedulerProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxscheduler';
class App extends React.PureComponent<{}, ISchedulerProps> {
    private myScheduler = React.createRef<JqxScheduler>();
    constructor(props: {}) {
        super(props);
        const appointments = new Array();
        const appointment1 = {
            calendar: "Room 2",
            description: "",
            from: new Date(2017, 10, 22, 8, 0, 0),
            id: "id4",
            location: "",
            style: '#AA4643',
            subject: "New Projects Planning",
            to: new Date(2017, 10, 22, 13, 0, 0)
        };
        const appointment2 = {
            calendar: "Room 1",
            description: "",
            from: new Date(2017, 10, 25, 13, 0, 0),
            id: "id5",
            location: "",
            style: '#89A54E',
            subject: "Interview with James",
            to: new Date(2017, 10, 25, 15, 0, 0)
        };
        const appointment3 = {
            calendar: "Room 2",
            description: "",
            from: new Date(2017, 10, 26, 14, 0, 0),
            id: "id6",
            location: "",
            style: '#71588F',
            subject: "Interview with Nancy",
            to: new Date(2017, 10, 26, 16, 0, 0),
        };
        const appointment4 = {
            calendar: "Room 1",
            description: "",
            from: new Date(2017, 10, 23, 10, 0, 0),
            id: "id7",
            location: "",
            recurrenceException: '2017-11-24 09:00:00,2017-11-26 12:00:00',
            recurrenceRule: 'FREQ=DAILY;',
            style: '#307DD7',
            subject: "Daily Meeting",
            to: new Date(2017, 10, 23, 11, 0, 0)
        };
        appointments.push(appointment1);
        appointments.push(appointment2);
        appointments.push(appointment3);
        appointments.push(appointment4);
        const source: any = {
            dataFields: [
                { name: 'calendar', type: 'string' },
                { name: 'description', type: 'string' },
                { name: 'from', type: 'date' },
                { name: 'id', type: 'string' },
                { name: 'location', type: 'string' },
                { name: 'recurrenceException', type: 'string' },
                { name: 'recurrenceRule', type: 'string' },
                { name: 'subject', type: 'string' },
                { name: 'style', type: 'string' },
                { name: 'to', type: 'date' }
            ],
            dataType: "array",
            id: 'id',
            localData: appointments
        };
        const dataAdapter: any = new jqx.dataAdapter(source);
        this.state = {
            appointmentDataFields: {
                description: "description",
                from: "from",
                id: "id",
                location: "location",
                recurrenceException: 'recurrenceException',
                recurrencePattern: 'recurrenceRule',
                resourceId: "calendar",
                style: 'style',
                subject: "subject",
                to: "to"
            },
            date: new jqx.date(2017, 11, 23),
            height: 600,
            ready: () => {
                setTimeout(() => {
                    this.myScheduler.current!.ensureAppointmentVisible("id7");
                });
            },
            source: dataAdapter,
            views: [
                'dayView',
                'weekView',
                'monthView'
            ]
        };
    }
    public render() {
        return (
            <JqxScheduler ref={this.myScheduler}
                // @ts-ignore
                //width={getWidth('scheduler')}
                height={this.state.height}
                date={this.state.date}
                source={this.state.source}
                appointmentDataFields={this.state.appointmentDataFields}
                view={"weekView"}
                views={this.state.views}
                ready={this.state.ready}
            />
        );
    }
}
export default App;

/*import * as React from 'react';

import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

class App extends React.PureComponent<{}, IGridProps> {

    private source: IGridProps['source'] = {
        localdata:
            [
                ['Maria Anders', 'Sales Representative', 'Berlin', 'Germany'],
                ['Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico'],
                ['Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico'],
                ['Thomas Hardy', 'Sales Representative', 'London', 'UK'],
                ['Christina Berglund', 'Order Administrator', 'Lule', 'Sweden'],
                ['Hanna Moos', 'Sales Representative', 'Mannheim', 'Germany'],
                ['Frdrique Citeaux', 'Marketing Manager', 'Strasbourg', 'France'],
                ['Martn Sommer', 'Owner', 'Madrid', 'Spain'],
                ['Owner', 'Marseille', 'France'],
                ['Elizabeth Lincoln', 'Accounting Manager', 'Tsawassen', 'Canada'],
                ['Victoria Ashworth', 'Sales Representative', 'London', 'UK'],
                ['Patricio Simpson', 'Sales Agent', 'Buenos Aires', 'Argentina'],
                ['Francisco Chang', 'Marketing Manager', 'Mxico D.F.', 'Mexico'],
                ['Yang Wang', 'Owner', 'Bern', 'Switzerland'],
                ['Pedro Afonso', 'Sales Associate', 'Sao Paulo', 'Brazil'],
                ['Elizabeth Brown', 'Sales Representative', 'London', 'UK'],
                ['Sven Ottlieb', 'Order Administrator', 'Aachen', 'Germany'],
                ['Janine Labrune', 'Owner', 'Nantes', 'France'],
                ['Ann Devon', 'Sales Agent', 'London', 'UK'],
                ['Roland Mendel', 'Sales Manager', 'Graz', 'Austria']
            ],
        datafields:
            [
                { name: 'ContactName', type: 'string', map: '0' },
                { name: 'Title', type: 'string', map: '1' },
                { name: 'City', type: 'string', map: '2' },
                { name: 'Country', type: 'string', map: '3' }
            ],
        datatype: 'array'
    };

    private columns: IGridProps['columns'] =
        [
            { text: 'Contact Name', datafield: 'ContactName', width: 240 },
            { text: 'Contact Title', datafield: 'Title', width: 240 },
            { text: 'City', datafield: 'City', width: 150 },
            { text: 'Country', datafield: 'Country' }
        ];

    constructor(props: {}) {
        super(props);

        this.state = {
            columns: this.columns,
            source: new jqx.dataAdapter(this.source)
        };
    }

    public render() {
        return (
            <JqxGrid
                width={850} source={this.state.source} columns={this.state.columns}
                pageable={true} autoheight={true} sortable={true} theme={'material-purple'}
                altrows={true} enabletooltips={true} editable={true}
            />
        );
    }
}

export default App;*/