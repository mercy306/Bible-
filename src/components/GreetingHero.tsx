import MountainHero from './MountainHero'
import type { LanguageMode } from '../prefs'

interface Props {
  language?: LanguageMode
  onDaily?: () => void
  className?: string
}

export function getGreeting(isEn: boolean): string {
  const hour = new Date().getHours()
  if (isEn) {
    if (hour < 12) return 'Good Morning'
    if (hour < 17) return 'Good Afternoon'
    return 'Good Evening'
  }
  if (hour < 12) return 'እንደምን አደሩ'
  if (hour < 17) return 'እንደምን ዋሉ'
  return 'እንደምን አመሹ'
}

export default function GreetingHero({ language = 'am', onDaily, className = '' }: Props) {
  const isEn = language === 'en'
  const greeting = getGreeting(isEn)

  return (
    <MountainHero className={`homeScreen__hero ${className}`.trim()}>
      <div className="homeScreen__heroText">
        <h1 className="homeScreen__greeting">{greeting}</h1>
        <blockquote
          className="homeScreen__quote"
          style={{ cursor: onDaily ? 'pointer' : undefined }}
          onClick={onDaily}
          title={onDaily ? (isEn ? 'Go to Daily Devotional' : 'ወደ ዕለቱ ጥቅስ ይሂዱ') : undefined}
        >
          {isEn ? '“The Lord is my shepherd; I shall not want.”' : '“እግዚአብሔር እረኛዬ ነው፥ የሚያሳጣኝም የለም።”'}
          <cite className="homeScreen__quoteRef">{isEn ? 'Psalm 23:1' : 'መዝሙር 23:1'}</cite>
        </blockquote>
      </div>
    </MountainHero>
  )
}
