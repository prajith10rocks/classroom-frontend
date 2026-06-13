import { CreateButton } from "@/components/refine-ui/buttons/create";
import { DataTable } from "@/components/refine-ui/data-table/data-table";
import { Breadcrumb } from "@/components/refine-ui/layout/breadcrumb";
import { ListView } from "@/components/refine-ui/views/list-view";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DEPARTMENT_OPTIONS } from "@/constants";
import { useTable } from "@refinedev/react-table";
import { Search } from "lucide-react";
import { useState,useMemo, useEffect } from "react";
import { subject } from "@/types";
import { Badge } from "@/components/ui/badge";
import { ColumnDef } from "@tanstack/react-table";

const SubjectList = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedDepartment, setselectedDepartment] = useState('all');

    const departmentFilters = selectedDepartment === 'all' ? [] : [
        {
            field: 'department',
            operator: 'eq' as const,
            value: selectedDepartment
        }
    ];

    const searchFilters = searchQuery ? [
        {
            field: "name",
            operator: 'contains' as const,
            value: searchQuery
        }
    ]: [];

    const subjectTable = useTable<subject>({
        columns: useMemo<ColumnDef<subject> []>(() => [
            {
                id: 'code',
                accessorKey: 'code',
                size: 100,
                header: () =>  <p className="column-title ml-2">codeee</p>,
                cell: (props) => <Badge>{props.getValue<string>()}</Badge>
            },
            {
                id: 'name',
                accessorKey: 'name',
                size: 200,
                header: () =>  <p className="column-title">Name</p>,
                cell: (props) =><span className="text-foreground">{props.getValue<string>()}</span>,
                filterFn: "includesString" 
            },
            {
                id: 'dept',
                accessorKey: 'department.name',  //which field should be displayed
                size: 150,
                header: () =>  <p className="column-title">Department</p>,
                cell: (props) => <Badge variant="secondary">{props.getValue<string>()}</Badge>
            },
            {
                id: 'description',
                accessorKey: 'description',
                size: 300,
                header: () =>  <p className="column-title">Description</p>,
                cell: (props) =><span className="truncate line-clamp-2">{props.getValue<string>()}</span>
            }
        ],[]),

       refineCoreProps: {
        resource: 'subjects',  //THE MAGIC KEYWORD to connect data provider
        pagination:{pageSize: 10, mode: 'server'},
        filters: {
            permanent: [...departmentFilters, ...searchFilters]
        },
        sorters: {
            initial: [
                { field: 'id', order: 'desc'},
            ]
        }
       }
    });


    // useEffect(() => {
    //     subjectTable.setFilters([
    //         ...departmentFilters, 
    //         ...searchFilters
    //     ])
    // },[searchQuery,selectedDepartment])

  return (
    <ListView>
        <Breadcrumb />
        <div className="page-title">SUBJECTS</div>
        <div className="intro-row">
            <p>hhhhhhhhhhhhhhhhhhhhhhhh</p>
            
            <div className="action-row">
                <div className="search-field">
                    <Search className="search-icon"/>
                    <Input 
                        type="search"
                        placeholder="search by name"
                        className="pl-10 w-full"
                        value={searchQuery}
                        onChange={(e) => {
                            setSearchQuery(e.target.value);
                        }}
                    />
                </div>
                <div className="flex gap-1 w-full sm:w-auto">
                    <Select value={selectedDepartment} onValueChange={setselectedDepartment}>
                        <SelectTrigger>
                            <SelectValue placeholder="filter by department"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all"> 
                                All Department
                            </SelectItem>
                            { DEPARTMENT_OPTIONS.map(department => (
                                <SelectItem key={department.value} value={department.value}>
                                    {department.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    <CreateButton/>
                </div>
            </div>
        </div>
        <DataTable table={subjectTable}/>
    </ListView>
  )
}

export default SubjectList;