export const formatCurrency = (amount: number): string => {
    return `$${amount.toFixed(2)}`;
};

export const validateItemData = (data: any): boolean => {
    const { title, price, quantity } = data;
    return typeof title === 'string' && title.length > 0 &&
           typeof price === 'number' && price >= 0 &&
           typeof quantity === 'number' && quantity >= 0;
};

export const parseWebhookPayload = (payload: any): any => {
    // Assuming the payload structure is known, parse it accordingly
    return {
        id: payload.id,
        status: payload.status,
        updatedAt: new Date(payload.updated_at),
    };
};