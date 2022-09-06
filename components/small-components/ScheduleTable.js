import { Table } from '@mantine/core';

const elements = [
  { name: 'First Fall Meeting', date: '09-09-2022', time: '5:30pm', location: 'CRC Room 111'},
  { name: 'Regular Meeting', date: '10-07-2022', time: '5:30pm', location: 'CRC Room 111' },
  { name: 'Regular Meeting', date: '09-23-2022', time: '5:30pm', location: 'CRC Room 111' },
  { name: 'Regular Meeting', date: '10-15-2022', time: '5:30pm', location: 'CRC Room 111' },
];


export function ScheduleTable() {
  const rows = elements.map((element) => (
    <tr key={element.date}>
      <td style={{ fontFamily: 'Roboto' }}>{element.name}</td>
      <td style={{ fontFamily: 'Roboto' }}>{element.date}</td>
      <td style={{ fontFamily: 'Roboto' }}>{element.time}</td>
      <td style={{ fontFamily: 'Roboto' }}>{element.location}</td>
    </tr>
  ));

  return (
    <Table fontSize="md" striped>
      <thead>
        <tr>
          <th>Meeting Name</th>
          <th>Meeting Date</th>
          <th>Time</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}