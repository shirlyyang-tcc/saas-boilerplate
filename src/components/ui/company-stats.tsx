import { StatsSection } from './stats-section';

export interface CompanyStatsI18nProps {
  stats: Array<{
    value: string;
    label: string;
    suffix?: string;
    prefix?: string;
    color?: string;
  }>;
  className?: string;
}

export function CompanyStatsI18n({ 
  stats,
  className = "" 
}: CompanyStatsI18nProps) {
  return (
    <StatsSection
      stats={stats.map(stat => ({
        ...stat,
        color: (stat.color as any) || 'primary'
      }))}
      variant="default"
      columns={3}
      className={className}
    />
  );
} 