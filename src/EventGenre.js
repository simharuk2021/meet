import React, { useEffect, useState} from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const EventGenre = ({ events }) => {
	const [data, setData] = useState([]);
	// Creates a function to get genre data from events data
	useEffect(() => {
		const getData = () => {
			const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS', 'Angular'];

			const data = genres.map(genre => {
				const value = events.filter(({ summary }) =>
					summary.split(' ').includes(genre)
				).length;
				return { name: genre, value };
			});
			return data;
		};
		setData(() => getData());
	}, [events]);

	const colors = ['blue', 'red', 'green', 'orange', 'purple', 'cyan'];

return (
    <ResponsiveContainer height={400} >
        <PieChart width={400} height={250} >
            <Pie
            data={data}
            cx="50%"
            cy="50%"
            labeline={false}
            outerRadius={80}
            fill ="#8884d8"
            dataKey="value"
            label={({ percent }) =>
						`${(percent * 100).toFixed(0)}%`
					}
				>
					{data.map((entry, index) => (
						<Cell
							key={`cell-${index}`}
							fill={colors[index % colors.length]}
							name={entry.name}
						/>
                        ))}
            </Pie>
            <Legend
					layout="horizontal"
					verticalAlign="top"
					align="center"
					height={45}
				/>
        </PieChart>
    </ResponsiveContainer>
        );
    }

    export default EventGenre;
