export interface NavItem { label: string; href: string; icon?: string }
export interface NavGroup { label: string; icon: string; items: NavItem[] }
export type NavEntry = NavItem | NavGroup
export interface EngineConfig { name: string; shortName: string; version: string; color: string; navigation: NavEntry[]; homeUrl: string }
