import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';

export default function usePerfectScrollbar() {
  let ps = PerfectScrollbar;
  const resize = () => {
    ps && ps.update();
  };
  return {
    install(el) {
      if (el) {
        ps = new PerfectScrollbar(el, {
          wheelSpeed: 2,
          wheelPropagation: false,
        });
        window.addEventListener('resize', resize, false);
        return ps;
      }
    },
    uninstall() {
      window.removeEventListener('resize', resize, false);
      ps && ps.destroy();
    },
  };
}
