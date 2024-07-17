export {}

declare global{

    interface ICatalog {
        id?: number;
        typeProduct: string;
        providers: string;
        typeClient: string;
        locations: string;
        actives: string;
      }
    
} 