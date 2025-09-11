'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import clsx from 'clsx';
import { MonitorIcon, MoonIcon, SunIcon } from 'lucide-react';
import ButtonBase from './common/button';

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [selectedTheme, setSelectedTheme] = React.useState<string>();

  React.useEffect(() => {
    setSelectedTheme(theme);
  }, [theme]);

  return (
    <div className="flex gap-0.5 rounded-full border border-[--border] bg-[--surface-primary] p-1 text-center dark:border-[--dark-border] dark:bg-[--dark-surface-primary]">
      <SwitchButton selectedTheme={selectedTheme} setTheme={setTheme} theme="light">
        <SunIcon color="currentColor" height={16} width={16} />
      </SwitchButton>
      <SwitchButton selectedTheme={selectedTheme} setTheme={setTheme} theme="system">
        <MonitorIcon color="currentColor" height={16} width={16} />
      </SwitchButton>
      <SwitchButton selectedTheme={selectedTheme} setTheme={setTheme} theme="dark">
        <MoonIcon color="currentColor" height={16} width={16} />
      </SwitchButton>
    </div>
  );
}

function SwitchButton({
  selectedTheme,
  theme,
  setTheme,
  children,
}: {
  selectedTheme?: string;
  theme: string;
  setTheme: (theme: string) => void;
  children?: React.ReactNode;
}) {
  return (
    <ButtonBase
      aria-label={`${theme} theme`}
      className={clsx(
        '!flex !size-6 items-center justify-center rounded-full !p-[3px] text-[--text-secondary] dark:text-[--dark-text-secondary]',
        "data-[selected='true']:bg-muted data-[selected='true']:text-[--text-primary] dark:data-[selected='true']:bg-muted dark:data-[selected='true']:text-inherit",
        'hover:bg-inherit text-muted-foreground dark:hover:text-inherit'
      )}
      data-selected={selectedTheme === theme}
      onClick={() => setTheme(theme)}
    >
      {children}
    </ButtonBase>
  );
}
