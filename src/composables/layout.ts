import { computed } from 'vue';
import { useThemeStore } from '@/store';

type LayoutHeaderProps = Record<EnumType.EnumTemplate, GlobalHeaderProps>;

export function useBasicLayout() {

    const theme = useThemeStore();

    const layoutHeaderProps: LayoutHeaderProps = {
        'template-one': {
          showLogo: false,
		  showSearch:true,
          showHeaderMenu: false,
          showMenuCollapse: true
        },
        'template-two': {
          showLogo: false,
		  showSearch:true,
          showHeaderMenu: false,
          showMenuCollapse: false
        },
        'template-three': {
          showLogo: true,
		  showSearch:true,
          showHeaderMenu: true,
          showMenuCollapse: false
        },
        'template-four': {
          showLogo: true,
		  showSearch:true,
          showHeaderMenu: false,
          showMenuCollapse: true
        }
    };

    const headerProps = computed(() => layoutHeaderProps[theme.layout.mode]);

    return {
        headerProps,
    };
}
