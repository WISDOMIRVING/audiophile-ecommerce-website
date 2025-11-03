
export default function DesignSystemPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--color-text-main)] p-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="flex items-center justify-between mb-12">
          <h1 className="text-2xl tracking-wider uppercase">Design System</h1>
          <span className="text-sm text-[rgba(0,0,0,0.45)]">Audiophile • Tokens</span>
        </header>

        {/* 01 Colors */}
        <section id="colors" className="mb-20">
          <div className="flex items-center gap-6 mb-6">
            <div className="text-orange-500 font-semibold">01</div>
            <h2 className="text-xl tracking-wider">Colors</h2>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <ColorSwatch hex="#D87D4A" label="Primary" sublabel="#D87D4A" />
            <ColorSwatch hex="#101010" label="Black" sublabel="#101010" />
            <ColorSwatch hex="#F1F1F1" label="Gray" sublabel="#F1F1F1" />
            <ColorSwatch hex="#FAFAFA" label="Light" sublabel="#FAFAFA" />
            <ColorSwatch hex="#FBAB85" label="Accent Light" sublabel="#FBAB85" />
            <ColorSwatch hex="#FFFFFF" label="White" sublabel="#FFFFFF" />
            <ColorSwatch hex="#000000" label="Pure Black" sublabel="#000000" />
          </div>
        </section>

        {/* 02 Typography */}
        <section id="typography" className="mb-20">
          <div className="flex items-center gap-6 mb-6">
            <div className="text-orange-500 font-semibold">02</div>
            <h2 className="text-xl tracking-wider">Typography</h2>
          </div>

          <div className="bg-[var(--color-gray)] p-6 rounded-md mb-8">
            <div className="font-bold text-3xl">MANROPE</div>
            <div className="text-sm mt-2 text-[rgba(0,0,0,0.45)]">ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz</div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h1 className="text-[56px] leading-[58px] font-bold mb-4">Morbi Interdum Mollis Sapien</h1>
              <h2 className="text-[40px] leading-[44px] font-bold mb-3">Donec nec justo eget felis facilisis</h2>
              <h3 className="text-[32px] leading-[36px] font-bold mb-2">Nunc sem lacus accum</h3>
              <h4 className="text-[28px] leading-[38px] font-bold mb-2">Interdum consectetur</h4>
              <h5 className="text-[24px] leading-[33px] font-bold mb-2">Nascetur Ridiculus Mus</h5>
              <h6 className="text-[18px] leading-[24px] font-bold mb-2">Natoque Penatibus Et</h6>
            </div>

            <div className="text-sm leading-[25px] text-[var(--color-text-light)]">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit. Pellentesque
                aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
                ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh.
              </p>
            </div>
          </div>
        </section>

        {/* 03 Buttons */}
        <section id="buttons" className="mb-20">
          <div className="flex items-center gap-6 mb-6">
            <div className="text-orange-500 font-semibold">03</div>
            <h2 className="text-xl tracking-wider">Buttons</h2>
          </div>

          <div className="flex items-center gap-6">
            <button className="px-6 py-3 bg-[var(--color-primary)] text-white font-bold uppercase rounded-md">See Product</button>
            <button className="px-6 py-3 border border-[var(--color-black)] font-bold uppercase rounded-md">See Product</button>
            <button className="px-6 py-3 text-[var(--color-primary)] font-semibold uppercase">Shop &rarr;</button>
          </div>

          <div className="flex items-center gap-6 mt-6">
            <button className="px-6 py-3 bg-[var(--color-primary-light)] text-white font-bold uppercase rounded-md">See Product</button>
            <button className="px-6 py-3 bg-[var(--color-black)] text-white font-bold uppercase rounded-md">See Product</button>
            <button className="px-6 py-3 text-[var(--color-primary)] font-semibold uppercase">Shop &rarr;</button>
          </div>
        </section>

        {/* 04 Form Elements */}
        <section id="forms" className="mb-20">
          <div className="flex items-center gap-6 mb-6">
            <div className="text-orange-500 font-semibold">04</div>
            <h2 className="text-xl tracking-wider">Form Elements</h2>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div>
              <label className="block text-xs mb-2">Name</label>
              <input aria-label="name" placeholder="Insert your name" className="w-full border rounded-md p-3 text-sm" />
              <div className="text-xs text-[rgba(0,0,0,0.45)] mt-2">Text Field Default</div>
            </div>

            <div>
              <label className="block text-xs mb-2">Payment</label>
              <div className="flex items-center gap-3">
                <label className="flex items-center gap-2 border rounded-md p-3 w-full">
                  <input type="radio" name="pay" defaultChecked />
                  <span className="text-sm">e-Money</span>
                </label>
              </div>
              <div className="text-xs text-[rgba(0,0,0,0.45)] mt-2">Radio Selection Default</div>
            </div>

            <div className="flex flex-col items-start">
              <label className="text-xs mb-2">Quantity</label>
              <div className="flex items-center gap-2 border rounded-md p-2">
                <button aria-label="decrease" className="px-2">-</button>
                <div className="px-4">1</div>
                <button aria-label="increase" className="px-2">+</button>
              </div>
              <div className="text-xs text-[rgba(0,0,0,0.45)] mt-2">Numbers Default</div>
            </div>

            {/* Active / Error states */}
            <div>
              <label className="block text-xs mb-2">Name (Active)</label>
              <input aria-label="name-active" defaultValue="Alexei" className="w-full border rounded-md p-3 text-sm border-[var(--color-primary)]" />
              <div className="text-xs text-[rgba(0,0,0,0.45)] mt-2">Text Field Active</div>
            </div>

            <div>
              <label className="block text-xs mb-2">Payment (Active)</label>
              <div className="flex items-center gap-3">
                <label className="flex items-center gap-2 border-[var(--color-primary)] rounded-md p-3 w-full">
                  <input type="radio" name="pay2" defaultChecked />
                  <span className="text-sm">e-Money</span>
                </label>
              </div>
              <div className="text-xs text-[rgba(0,0,0,0.45)] mt-2">Radio Selection Active</div>
            </div>

            <div className="flex flex-col items-start">
              <label className="text-xs mb-2">Quantity (Hover)</label>
              <div className="flex items-center gap-2 border rounded-md p-2 bg-[var(--color-gray)]">
                <button aria-label="decrease" className="px-2">-</button>
                <div className="px-4">1</div>
                <button aria-label="increase" className="px-2">+</button>
              </div>
              <div className="text-xs text-[rgba(0,0,0,0.45)] mt-2">Numbers Hover</div>
            </div>

            <div>
              <label className="block text-xs mb-2">Name (Error)</label>
              <input aria-label="name-error" defaultValue="!@#%$" className="w-full border rounded-md p-3 text-sm border-red-500" />
              <div className="text-xs text-red-500 mt-2">Wrong format</div>
              <div className="text-xs text-[rgba(0,0,0,0.45)] mt-2">Text Field Error</div>
            </div>

            <div>
              <label className="block text-xs mb-2">Payment (Hover)</label>
              <div className="flex items-center gap-3">
                <label className="flex items-center gap-2 border rounded-md p-3 w-full">
                  <input type="radio" name="pay3" />
                  <span className="text-sm">e-Money</span>
                </label>
              </div>
              <div className="text-xs text-[rgba(0,0,0,0.45)] mt-2">Radio Selection Hover</div>
            </div>

            <div className="flex flex-col items-start">
              <label className="text-xs mb-2">Quantity (Disabled)</label>
              <div className="flex items-center gap-2 border rounded-md p-2 opacity-50">
                <button aria-label="decrease" className="px-2">-</button>
                <div className="px-4">1</div>
                <button aria-label="increase" className="px-2">+</button>
              </div>
              <div className="text-xs text-[rgba(0,0,0,0.45)] mt-2">Numbers Disabled</div>
            </div>
          </div>
        </section>

        <footer className="mt-24 text-xs text-[rgba(0,0,0,0.45)]">Design system demo — adapted from Audiophile Figma</footer>
      </div>
    </main>
  );
}

function ColorSwatch({ hex, label, sublabel }: { hex: string; label: string; sublabel?: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-40 h-16 rounded-md shadow-sm" style={{ background: hex }} aria-hidden />
      <div>
        <div className="font-semibold">{label}</div>
        <div className="text-xs text-[rgba(0,0,0,0.45)]">{sublabel}</div>
      </div>
    </div>
  );
}
