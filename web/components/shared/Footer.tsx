export function Footer() {
  return (
    <footer className="bg-[#121212] py-6 px-10 border-t border-neutral-800 text-sm text-gray-400">
      <div className="grid grid-cols-4 gap-10">
        <div>
          <h3 className="text-white font-semibold mb-2">Sports</h3>
          <p>Events</p>
          <p>In-Play</p>
          <p>Racing</p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">Games</h3>
          <p>Casino</p>
          <p>Live Casino</p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">Rules</h3>
          <p>Terms & Conditions</p>
          <p>Betting & Sporting Rules</p>
          <p>Responsible Gambling</p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">LisaParyaj</h3>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Live Support</p>
          <div className="flex gap-2 mt-2">
            {/* social icons placeholder */}
            <span>🎯</span>
            <span>📺</span>
            <span>📷</span>
            <span>📱</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
