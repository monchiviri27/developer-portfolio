import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dopskorsfzktsbxfltrn.supabase.co' // Pega tu Project URL aquí
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRvcHNrb3JzZnprdHNieGZsdHJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg1NDE4NDMsImV4cCI6MjA3NDExNzg0M30.OIAQUzm_sAjMp1RteapAfWmciy9RLmX1PZVKM3GdijA' // Pega tu anon public key aquí

export const supabase = createClient(supabaseUrl, supabaseAnonKey)