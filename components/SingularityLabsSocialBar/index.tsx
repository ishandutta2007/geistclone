import { memo } from 'react'
// import { Theme } from '~config'

import discordIcon from './discord-black-thin.svg'
import discordWhiteIcon from './discord-white-thin.svg'
export const DISCORD_HOME = 'https://discord.gg/jc4xtF58Ve'

import githubIcon from './github-black-thin.svg'
import githubWhiteIcon from './github-white-thin.svg'
export const GITHUB_HOME = 'https://github.com/SingularityLabs-ai'

import twitterIcon from './twitter-black-thin.svg'
import twitterWhiteIcon from './twitter-white-thin.svg'
export const TWITTER_HOME = 'https://twitter.com/labssingularity'

import linkedinIcon from './linkedin-black-thin.svg'
import linkedinWhiteIcon from './linkedin-white-thin.svg'
export const LINKEDIN_HOME = 'https://www.linkedin.com/company/singularity-labs-ai'

function IconButton(props: { icon: string; onClick?: () => void }) {
  return (
    <div
      className="p-[2px] rounded-[8px] w-fit cursor-pointer hover:opacity-80 bg-secondary bg-opacity-20"
      onClick={props.onClick}
    >
      <img src={props.icon} className="w-4 h-4" />
    </div>
  )
}

export enum Theme {
  Auto = 'auto',
  Light = 'light',
  Dark = 'dark',
}

interface Props {
  theme?: Theme
}

function SingularityLabsSocialBar(props: Props) {
  console.log('SingularityLabsSocialBar:theme', props.theme)
  return (
    <div className="gpt-feedback flex flex-row px-4 pt-4 rounded-[10px] items-center gap-2 justify-evenly">
      <span>
        <a href={DISCORD_HOME} target="_blank" rel="noreferrer">
          <IconButton icon={props.theme == Theme.Dark ? discordWhiteIcon : discordIcon} />
        </a>
      </span>
      <span>
        <a href={GITHUB_HOME} target="_blank" rel="noreferrer">
          <IconButton icon={props.theme == Theme.Dark ? githubWhiteIcon : githubIcon} />
        </a>
      </span>
      <span>
        <a href={TWITTER_HOME} target="_blank" rel="noreferrer">
          <IconButton icon={props.theme == Theme.Dark ? twitterWhiteIcon : twitterIcon} />
        </a>
      </span>
      <span>
        <a href={LINKEDIN_HOME} target="_blank" rel="noreferrer">
          <IconButton icon={props.theme == Theme.Dark ? linkedinWhiteIcon : linkedinIcon} />
        </a>
      </span>
    </div>
  )
}

export default memo(SingularityLabsSocialBar)
