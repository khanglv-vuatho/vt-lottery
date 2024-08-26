'use client'

import React from 'react'

import { Modal, ModalContent, ModalBody, ModalProps } from '@nextui-org/react'
import { twMerge } from 'tailwind-merge'

type DefaultModal = {
  isOpen: boolean
  onOpenChange: () => void
  children?: any
  className?: string
} & ModalProps

export const DefaultModal: React.FC<DefaultModal> = ({ isOpen, onOpenChange, children, className, ...props }) => {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      hideCloseButton
      placement='center'
      classNames={{
        body: 'p-0',
        base: 'rounded-xl'
      }}
      {...props}
    >
      <ModalContent className={twMerge('mx-4 p-4', className)}>{() => <ModalBody>{children}</ModalBody>}</ModalContent>
    </Modal>
  )
}
