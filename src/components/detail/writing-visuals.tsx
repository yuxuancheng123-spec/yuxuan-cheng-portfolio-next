import type { DetailVisual } from "@/data/content";

function FaceTheftVisual() {
  return (
    <figure aria-label="Editorial illustration about face theft in synthetic media" className="relative overflow-hidden rounded-[28px] border border-black/7 bg-[#dce7e6] p-5 shadow-[0_18px_55px_rgba(38,57,67,0.08)] sm:p-8 lg:p-10">
      <div className="grid min-h-[320px] gap-4 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <div className="relative mx-auto aspect-square w-full max-w-[320px] rounded-full border border-[#315f82]/22" aria-hidden="true">
          <span className="absolute inset-[14%] rounded-full border border-[#315f82]/18" />
          <span className="absolute left-1/2 top-[26%] h-[22%] w-[22%] -translate-x-1/2 rounded-full bg-[#315f82]/72" />
          <span className="absolute bottom-[19%] left-1/2 h-[27%] w-[45%] -translate-x-1/2 rounded-t-full bg-[#315f82]/34" />
          <span className="absolute -right-2 top-[14%] rounded-[10px] bg-[#17222a] px-3 py-2 font-mono text-[9px] text-white">IDENTITY INPUT</span>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-[18px] border border-white/75 bg-white/68 p-5">
            <p className="font-mono text-[9px] text-[#315f82]">SOURCE</p>
            <p className="mt-8 text-xl font-medium tracking-[-0.03em]">Public image</p>
            <p className="mt-2 text-sm text-[#334652]/58">Visible does not mean licensed.</p>
          </div>
          <div className="rounded-[18px] bg-[#17222a] p-5 text-white">
            <p className="font-mono text-[9px] text-[#9cc2d8]">OUTPUT</p>
            <p className="mt-8 text-xl font-medium tracking-[-0.03em]">Commercial scene</p>
            <p className="mt-2 text-sm text-white/48">Identity reused at production speed.</p>
          </div>
          <div className="rounded-[18px] border border-[#b65043]/18 bg-[#f4e4df] p-5 sm:col-span-2">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-mono text-[9px] text-[#9f453b]">MISSING CONTROL</p>
                <p className="mt-2 text-xl font-medium tracking-[-0.03em]">Permission record</p>
              </div>
              <span className="grid h-12 w-12 place-items-center rounded-full border border-[#b65043]/24 text-xl text-[#9f453b]">!</span>
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
}

function PermissionFirstVisual() {
  const records = [
    ["Authorization", "VALID"],
    ["Identity scope", "MATCHED"],
    ["Disclosure", "BOUND"],
    ["Provenance", "ATTACHED"],
  ];
  return (
    <figure aria-label="Editorial illustration of permission-first infrastructure" className="overflow-hidden rounded-[28px] border border-black/7 bg-[#e9e4dc] p-5 shadow-[0_18px_55px_rgba(70,59,47,0.08)] sm:p-8 lg:p-10">
      <div className="grid gap-4 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
        <div className="rounded-[22px] bg-[#17222a] p-6 text-white sm:p-8">
          <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#9cc2d8]">Before generation</p>
          <p className="mt-16 text-4xl font-medium leading-[0.94] tracking-[-0.05em] sm:text-5xl">Permission becomes an input.</p>
        </div>
        <div className="rounded-[22px] border border-white/75 bg-white/68 p-5 sm:p-6">
          <div className="flex items-center justify-between gap-4 border-b border-black/8 pb-4">
            <span className="font-mono text-[9px] text-[#315f82]">PERMISSION / P-0184</span>
            <span className="rounded-full bg-[#d9e8df] px-3 py-1.5 text-[9px] font-semibold text-[#365d50]">ACTIVE</span>
          </div>
          <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {records.map(([label, value]) => (
              <div key={label} className="rounded-[14px] border border-black/7 bg-[#f7f8f6] p-4">
                <p className="text-xs text-[#334652]/48">{label}</p>
                <p className="mt-4 font-mono text-[10px] font-semibold text-[#315f82]">{value}</p>
              </div>
            ))}
          </div>
          <div className="mt-2.5 flex items-center gap-3 rounded-[14px] bg-[#dce6e8] p-4">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#315f82] text-xs text-white">01</span>
            <p className="text-sm font-medium text-[#17222a]">Generate only when the request matches the record.</p>
          </div>
        </div>
      </div>
    </figure>
  );
}

export function WritingHeroVisual({ visual }: { visual: DetailVisual }) {
  return visual === "face-theft" ? <FaceTheftVisual /> : <PermissionFirstVisual />;
}
