export interface Root {
  code: number
  data: IData
  error: any[]
  message: string
  payload: any[]
}

export interface IData {
  slug: string
  id: number
  title: string
  description: string
  platform: string
  type: string
  modality: string
  old_info: OldInfo
  start_at: string
  media: Media[]
  checklist: Checklist[]
  seo: any[]
  cta_text: CtaText
  sections: Section[]
}

export interface OldInfo {
  cat_id: number
  course_id: number
  platform: string
  skills_cat_id: number
  slug: string
}

export interface Media {
  name: string
  order_idx: number
  resource_type: string
  resource_value: string
  thumbnail_url?: string
}

export interface Checklist {
  color: string
  icon: string
  text: string
}

export interface CtaText {
  name: string
  value: string
}

export interface Section {
  type: string
  name: string
  order_idx: number
  values: Value[]
}

export interface Value {
  background_color?: string
  background_img?: string
  checklist_text_color?: string
  end_at?: string
  start_at?: string
  template?: string
  text?: string
  description?: string
  image?: string
  name?: string
  short_description?: string
  slug?: string
  icon?: string
  subtitle?: string
  title?: string
  color?: string
  download_link?: string
  html?: string
  checklist?: string[]
  file_type?: string
  file_url?: string
  video_thumbnail?: string
  order_idx?: number
  profile_image?: string
  testimonial?: string
  video_type?: string
  video_url?: string
  answer?: string
  question?: string
}
