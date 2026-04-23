export type NavigationItem = {
	title: string
	url: string
}

export type SocialIconName = 'instagram' | 'facebook' | 'whatsapp'

export type SocialNavigationItem = NavigationItem & {
	icon: SocialIconName
}

export const navigationData = [
	{
		title: 'Propuesta',
		url: '/propuesta'
	},
	{
		title: 'Docentes',
		url: '/docentes'
	},
	{
		title: 'Programa',
		url: '/programa'
	},
	{
		title: 'Calendario',
		url: '/calendario'
	},
	{
		title: 'Inscripciones',
		url: '/inscripciones'
	}
] satisfies NavigationItem[]

export const socialNavigation = [
	{
		title: 'Instagram',
		url: 'https://www.instagram.com/spine_contact_improvisacion',
		icon: 'instagram'
	},
	{
		title: 'Facebook',
		url: 'https://www.facebook.com/events/1264559505738189/1264566832404123/',
		icon: 'facebook'
	},
	{
		title: 'WhatsApp',
		url: 'https://wa.me/34647229001',
		icon: 'whatsapp'
	}
] satisfies SocialNavigationItem[]
