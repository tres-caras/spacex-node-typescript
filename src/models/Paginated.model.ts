export type Paginated<T> = {
    data: T[];
    total: number;
    per_page: number;
    page: number;
    pages: number;
}