import {useMemo} from 'react';
import {PieChart, Pie, Cell, Tooltip, ResponsiveContainer} from 'recharts';
import {clsx} from 'clsx';
import SurfaceCard from '../../ui/SurfaceCard';
import SkeletonCard from './SkeletonCard';

export interface PieDatum {
    name: string;
    value: number;
}

interface PieChartCardProps {
    title: string;
    data?: PieDatum[];
    activeName?: string | null;
    loading?: boolean;
    onSelect?: (name: string) => void;
}

// const chartShades = [
//     '#165E2F',
//     '#32D96C',
//     '#114A25',
//     '#2DC462',
//     '#15592D',
//     '#28B058',
//     '#1F8744',
//     '#37ED76',
//     '#0C361B',
//     '#249C4E',
// ];

const chartShades = [
    '#154024',
    '#3C8C58',
    '#15592D',
    '#58A673',
    '#78BF91',
    '#ABFFC8',
    '#C4FFD9',
    '#DEFFE9',
    '#C9F2D7',
    '#9ED9B3',
];
const percentFormatter = new Intl.NumberFormat('en-US', {maximumFractionDigits: 1});

const compactCurrency = (value: number) => {
    if (!Number.isFinite(value)) return '—';
    const formatter = new Intl.NumberFormat('en-US', {
        notation: 'compact',
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
    });
    return `$${formatter.format(value)}`;
};

const PieChartCard = ({title, data = [], loading, activeName, onSelect}: PieChartCardProps) => {
    const chartData = useMemo(
        () =>
            data.map((item, index) => ({
                name: item.name,
                value: item.value ?? 0,
                color: chartShades[index % chartShades.length],
            })),
        [data]
    );

    const totalValue = useMemo(
        () => chartData.reduce((sum, item) => sum + item.value, 0),
        [chartData]
    );

    if (loading) {
        return <SkeletonCard className="h-full"/>;
    }

    if (!data.length) {
        return (
            <SurfaceCard className="h-full p-6 text-center text-graphite-400">
                <h3 className="mb-3 text-left text-lg font-semibold text-graphite-700">{title}</h3>
                No data available.
            </SurfaceCard>
        );
    }

    const handleSliceClick = (name?: string) => {
        if (!name) return;
        onSelect?.(name);
    };

  return (
    <SurfaceCard className="h-full px-5 py-5">
      <h3 className="text-lg font-semibold text-graphite-700">{title}</h3>
      <div className="mt-4 space-y-4">
        <div className="relative flex w-full justify-center">
                    <div className="h-56 w-full max-w-xl">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={chartData}
                                    dataKey="value"
                                    nameKey="name"
                                    innerRadius="70%"
                                    outerRadius="90%"
                                    paddingAngle={1}
                                    stroke="var(--surface)"
                                    strokeWidth={2}
                                    onClick={(data) => handleSliceClick(data?.name)}
                                >
                                    {chartData.map((entry) => (
                                        <Cell key={entry.name} fill={entry.color} stroke={entry.color}
                                              className="cursor-pointer"/>
                                    ))}
                                </Pie>
                                <Tooltip
                                    formatter={(value: number, name: string) => [
                                        `${percentFormatter.format(totalValue > 0 ? (Number(value) / totalValue) * 100 : 0)}%`,
                                        name,
                                    ]}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div
                        className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center text-black">
                        <p className="text-2xl font-semibold">{compactCurrency(totalValue)}</p>
                        <p className="text-sm font-medium text-black/60">Total Value</p>
                    </div>
                </div>
        <ul className="space-y-0 px-1 pb-1">
          {data.map((item, index) => (
                        <li key={item.name}>
                            <button
                                type="button"
                                onClick={() => onSelect?.(item.name)}
                                className={clsx(
                                    'flex w-full items-center justify-between rounded-xl border px-3 py-0.5 text-left transition',
                                    activeName === item.name
                                        ? 'border-mint-500 bg-mint-50 text-graphite-800'
                                        : 'border-transparent text-graphite-500 hover:border-graphite-200'
                                )}
                            >
                <span className="flex items-center gap-3">
                  <span
                      className="h-3 w-3 rounded-full"
                      style={{backgroundColor: chartShades[index % chartShades.length]}}
                  />
                  <span className="truncate">{item.name}</span>
                </span>
                                <span className="text-sm font-semibold text-graphite-600">
                  {totalValue > 0
                      ? `${percentFormatter.format((item.value / totalValue) * 100)}%`
                      : '0%'}
                </span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            {activeName && (
                <div className="mt-4 text-sm text-graphite-500">
                    Filtering by <span className="font-semibold text-graphite-700">{activeName}</span>
                </div>
            )}
        </SurfaceCard>
    );
};

export default PieChartCard;
