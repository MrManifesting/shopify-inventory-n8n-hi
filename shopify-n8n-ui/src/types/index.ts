export interface InventoryItem {
    id: string;
    title: string;
    quantity: number;
    status: 'draft' | 'listed' | 'new';
    price: number;
    createdAt: string;
    updatedAt: string;
}

export interface ApiResponse<T> {
    data: T;
    message?: string;
    error?: boolean;
}

export interface ItemFormProps {
    onSubmit: (item: InventoryItem) => void;
    initialValues?: InventoryItem;
}

export interface InventoryListProps {
    items: InventoryItem[];
    onStatusChange: (id: string, status: 'draft' | 'listed' | 'new') => void;
}

export interface StatusUpdaterProps {
    itemId: string;
    currentStatus: 'draft' | 'listed' | 'new';
    onStatusUpdate: (id: string, status: 'draft' | 'listed' | 'new') => void;
}

export interface DashboardStats {
    totalItems: number;
    listedItems: number;
    draftItems: number;
    newItems: number;
}