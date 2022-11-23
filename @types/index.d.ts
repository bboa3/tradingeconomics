declare module 'economics' {
  export interface Indicator {
    id: string
    name: string
  }
  export interface FilterData {
    name: string
    id: string
    href: string
  }

  export interface Period {
    label: string,
    from: string,
    to: string
  }

  export interface ChartType {
    id: string
    label: string
  }

  export interface Page {
    name: string
    id: string
  }

  export interface SearchPage {
    id: string
    name: string
    href: string
  }

  export interface Menu {
    name: string
    id: string
    Icon: any
    open: boolean
    pages: Page[]
  }

export type FolderName = 'Mercados' | 'Negócios' | 'Habitação' | 'Macroeconomia'

  export interface Folder {
    folderName: FolderName,
    folderMenus: Menu[]
  }

  export interface SideMenuData {
    selected: Menu
    options: Menu[]
  }

  export interface Axis {
    y: number
    x: Date | string | number
  }

  export interface AxisGroup {
    name: string
    color: string
    axis: Axis[]
  }

  export interface Table4ColRow {
    col1: {
      value: string | number
      className?: string
    }
    col2: string | number
    col3: {
      value: number
      className?: string
    }
    col4: string | number
  }

  export interface Table6ColRow {
    col1: string
    col2: string | number
    col3: string | number
    col4: string | number
    col5: string | number
    col6: string | number
  }

  export interface Table3ColRow {
    col1: string | number
    col2: string | number
    col3: string | number
  }

  export interface ChartDropdownMenuItem {
    id: string | number
    name: string
  }

  export interface Historical {
    Symbol: string
    Date: string
    Open: string
    High: string
    Low: string
    Close: string
  }
}
