import { 
  DataProvider, 
  GetListParams,  
  BaseRecord, 
  GetListResponse
} from "@refinedev/core";
import { MOCK_SUBJECTS } from "@/constants/mock_data";


export const dataProvider: DataProvider = {
    getList: async <TData extends BaseRecord = BaseRecord>(
        params: GetListParams
    ): Promise<GetListResponse<TData>> => {
        
        // Destructure the parameters inside the body to make typing cleaner
        const { resource, pagination, filters, sorters } = params;
        if(resource !== 'subjects')
        {
            return {
            data: [] as TData[], // Your mapped array data
            total: 0  // Total count for server-side pagination
        }
        }
        return {
            data: MOCK_SUBJECTS as unknown as TData[],
            total: MOCK_SUBJECTS.length,
        }
    },
    getOne: async () => { throw new Error('This function is notpresent in mock')},
    create: async () => { throw new Error('This function is notpresent in mock')},
    update: async () => { throw new Error('This function is notpresent in mock')},
    deleteOne: async () => { throw new Error('This function is notpresent in mock')},
    
    getApiUrl: () => ''
};


