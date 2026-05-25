import { TrendingUp, Activity, BarChart3, DollarSign } from 'lucide-react'

const TICKER_ITEMS = [
  { icon: TrendingUp, text: 'XAUUSD +$1,240 Today', color: '#00FF99' },
  { icon: Activity, text: 'Live Trading Active', color: '#FFD700' },
  { icon: BarChart3, text: '94% Win Rate', color: '#00FF99' },
  { icon: DollarSign, text: '500+ Happy Traders', color: '#FFD700' },
  { icon: TrendingUp, text: 'AI Signals Running', color: '#00FF99' },
  { icon: Activity, text: '24/7 Market Monitoring', color: '#FFD700' },
  { icon: BarChart3, text: 'Auto Risk Management', color: '#00FF99' },
  { icon: DollarSign, text: 'MT4/MT5 Compatible', color: '#FFD700' },
]

export default function LiveTicker() {
  // Duplicate items for seamless loop
  const allItems = [...TICKER_ITEMS, ...TICKER_ITEMS]

  return (
    <div className="relative z-[1] w-full overflow-hidden bg-navy/80 backdrop-blur-sm border-y border-gold/[0.06] py-3">
      <div className="flex animate-marquee whitespace-nowrap">
        {allItems.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 mx-8 flex-shrink-0"
          >
            <item.icon size={14} style={{ color: item.color }} />
            <span
              className="font-body font-medium text-[13px] uppercase tracking-[1px]"
              style={{ color: item.color }}
            >
              {item.text}
            </span>
            <span className="text-gold/30 ml-4">|</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
