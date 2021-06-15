export interface IPlanningItem {
  title: string;
  description: string;
  startDate: Date | null;
  endDate: Date | null;
  fromRow?: number | null;
  toRow?: number | null;
  column?: number | null;
}