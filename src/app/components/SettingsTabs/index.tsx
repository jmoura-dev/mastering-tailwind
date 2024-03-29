'use client'

import * as Tabs from '@radix-ui/react-tabs'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import { TabItem } from './TabItem'
import { useState } from 'react'

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState('my-details')

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <ScrollArea.Root className="w-full" type="scroll">
        <ScrollArea.Viewport className="w-full overflow-x-scroll">
          <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200 dark:border-zinc-700">
            <TabItem
              title="My details"
              value="my-details"
              isSelected={currentTab === 'my-details'}
            />
            <TabItem
              title="Profile"
              value="profile"
              isSelected={currentTab === 'profile'}
            />
            <TabItem
              title="Password"
              value="password"
              isSelected={currentTab === 'password'}
            />
            <TabItem
              title="Team 04"
              value="team-04"
              isSelected={currentTab === 'team-04'}
            />
            <TabItem
              title="Plan"
              value="plan"
              isSelected={currentTab === 'plan'}
            />
            <TabItem
              title="Billing 02"
              value="billing-02"
              isSelected={currentTab === 'billing-02'}
            />
            <TabItem
              title="Email"
              value="email"
              isSelected={currentTab === 'email'}
            />
            <TabItem
              title="Notifications"
              value="notifications"
              isSelected={currentTab === 'notifications'}
            />
            <TabItem
              title="Integrations"
              value="integrations"
              isSelected={currentTab === 'integrations'}
            />
            <TabItem
              title="API"
              value="api"
              isSelected={currentTab === 'api'}
            />
          </Tabs.List>
        </ScrollArea.Viewport>

        <ScrollArea.Scrollbar
          orientation="horizontal"
          className="flex h-0.5 translate-y-1.5 touch-none select-none flex-col bg-zinc-100"
        >
          <ScrollArea.Thumb className="relative flex-1 rounded-lg bg-zinc-300" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </Tabs.Root>
  )
}
