export default function Footer() {
  return (
    <footer className="bg-surface border-t border-outline-variant/30 w-full mt-auto">
      <div className="max-w-[1120px] mx-auto w-full px-6 py-12 md:py-16 flex justify-center items-center">
        <div className="font-mono text-xs uppercase tracking-widest text-on-surface-variant text-center">
          © {new Date().getFullYear()} Keilam C. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
