import { Table } from '@mantine/core';

const elements = [
  { name: 'First Fall Meeting', date: '09-12-2022', location: 'CRC 510' },
  { name: 'Regular Meeting', date: '09-28-2022', location: 'CRC 510' },
  { name: 'Regular Meeting', date: '10-08-2022', location: 'CRC 510' },
  { name: 'Spindell Open Gym', date: '10-15-2022', location: 'Spindell Barbell Club' },
];


export function ScheduleTable() {
  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td style={{ fontFamily: 'Roboto' }}>{element.name}</td>
      <td style={{ fontFamily: 'Roboto' }}>{element.date}</td>
      <td style={{ fontFamily: 'Roboto' }}>{element.location}</td>
    </tr>
  ));

  return (
    <Table fontSize="md" striped>
      <thead>
        <tr>
          <th>Meeting Name</th>
          <th>Meeting Date</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}