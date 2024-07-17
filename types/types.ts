interface Book {
    id: string;
    volumeInfo: {
        title: string;
        authors?: string[];
        publisher?: string;
        imageLinks?: {
            thumbnail?: string;
        }
    };
}

interface SelectedBook {
    id: string;
    volumeInfo: {
        title: string;
        authors?: string[];
        publisher?: string;
        imageLinks?: {
            large?: string;
            thumbnail?: string;
        }
        description?: string;
        pageCount?: number;
        categories?: string;
        language?: string;
    };
}
