
import { sportySectionTheme } from "../styles/sportyTheme";
import { InfoBar } from "../types";

interface InfoBarProps {
  infoBar: InfoBar;
}

const InfoBarComponent: React.FC<InfoBarProps> = ({ infoBar }) => (
  <div
    className="w-full"
    style={{
      position: 'fixed',
      top: 55, // No gap between Navbar and InfoBar
      left: 0,
      width: '100vw',
      zIndex: 99,
      background: sportySectionTheme.section.style.background,
      color: sportySectionTheme.font.description.className.includes('text-white') ? '#fff' : undefined,
  padding: '2px 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: sportySectionTheme.font.description.style.fontFamily,
  fontSize: '0.82rem',
      fontWeight: 400,
      boxShadow: '0 2px 12px 0 #0006',
    }}
  >
  <span style={{ marginBottom: 4, fontSize: '0.82rem' }}>{infoBar.text}</span>
    <div style={{ display: 'flex', flexDirection: 'row', gap: 12, flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
      {Array.isArray(infoBar.buttons) && infoBar.buttons.map((btn: any, idx: number) => (
        <button
          key={idx}
          className={sportySectionTheme.sharpButton.className}
          style={{
            ...sportySectionTheme.sharpButton.style,
            fontSize: '0.7rem',
            padding: '7px 12px',
            margin: 6,
            minWidth: 140,
            width: 'auto',
            maxWidth: '100%',
          }}
          onClick={() => {
            if (btn.newTab) {
              if (typeof window !== 'undefined') {
                window.open(btn.url, '_blank');
              }
            } else {
              window.location.href = btn.url;
            }
          }}
        >
          {btn.label}
        </button>
      ))}
      <style>{`
        @media (max-width: 600px) {
          .${sportySectionTheme.sharpButton.className.replace(/ /g, '.')} {
            font-size: 0.6rem !important;
          }
        }
      `}</style>
    </div>
  </div>
);

export default InfoBarComponent;
