export function createWhatsAppOrderUrl(message: string): string {
  const phone = import.meta.env.VITE_WHATSAPP_NUMBER

  if (!phone) {
    console.warn('VITE_WHATSAPP_NUMBER is not set')
  }

  return `https://wa.me/${phone ?? ''}?text=${encodeURIComponent(message)}`
}

type OrderMessageInput = {
  productName: string
  price: number
  size?: string
  color?: string
  imageUrl?: string
}

export function buildWhatsAppOrderMessage({
  productName,
  price,
  size,
  color,
  imageUrl,
}: OrderMessageInput): string {
  const lines = [
    'السلام عليكم، أريد طلب المنتج التالي:',
    '',
    `المنتج: ${productName}`,
    `السعر: ${price} جنيه`,
  ]

  if (size) lines.push(`المقاس: ${size}`)
  if (color) lines.push(`اللون: ${color}`)
  if (imageUrl) {
    lines.push('', 'صورة المنتج:', imageUrl)
  }

  lines.push('', 'أريد معرفة تفاصيل الطلب والتوصيل.')

  return lines.join('\n')
}

export function openWhatsAppOrder(message: string) {
  window.open(createWhatsAppOrderUrl(message), '_blank', 'noopener,noreferrer')
}
