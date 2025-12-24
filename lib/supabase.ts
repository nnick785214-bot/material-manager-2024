import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface Material {
  id: string
  material_number: string
  title: string
  file_type: 'image' | 'video'
  file_url: string
  thumbnail_url?: string
  file_size?: number
  is_used: boolean
  used_at?: string
  uploaded_by?: string
  created_at: string
  updated_at: string
}

export interface UserRole {
  id: string
  user_id: string
  role: 'admin' | 'uploader' | 'viewer'
  created_at: string
}
