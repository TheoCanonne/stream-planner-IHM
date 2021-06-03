export interface IPlanningItem {
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  fromRow: number;
  toRow: number;
  column: number;
}