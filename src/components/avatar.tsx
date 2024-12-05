interface AvatarProps {
  src?: string | null // The image source
  alt?: string // Alt text for the image
  size?: 'sm' | 'md' | 'lg' | 'xl' // Size variants
}

export function Avatar({ src, alt = '', size = 'sm' }: AvatarProps) {
  const sizeClasses = {
    sm: 'h-8 w-8 rounded-full outline outline-2 outline-offset-2 outline-primary object-cover',
    md: 'w-12 h-12 rounded-full outline outline-offset-2 outline-primary object-cover',
    lg: 'w-16 h-16 rounded-full outline outline-offset-2 outline-primary',
    xl: 'h-20 w-20 outline outline-offset-2 outline-primary rounded-full object-cover',
  }

  let hasSrc: boolean = true

  if (src === undefined || src === null) {
    hasSrc = false
    src =
      'https://cdn2.iconfinder.com/data/icons/farm-animal/100/farm_23-512.png'
  }

  return (
    <>
      {hasSrc ? (
        <img
          src={`data:image/png;base64,${src}`}
          alt={alt}
          className={sizeClasses[size]} // Dynamically apply classes based on the size
        />
      ) : (
        <img
          src={src}
          alt={alt}
          className={sizeClasses[size]} // Dynamically apply classes based on the size
        />
      )}
    </>
  )
}
