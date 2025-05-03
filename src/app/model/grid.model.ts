export interface GridColumn {
    column_key: string;
    column_name: string;
    type: string;
    align: string;
  }
  
  export interface TeamTag {
    text_color: string;
    background_color: string;
    value: string;
  }
  
  export interface Name {
    first_name: string;
    last_name: string;
    handle: string;
  }
  
  export interface GridRow {
    id: string;
    name: Name;
    status: string;
    email: string;
    role: string;
    license_used: number;
    teams: TeamTag[];
  }
  