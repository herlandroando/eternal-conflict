<script setup lang="ts">
import { Card } from '@/components/ui/card';
import CardHeader from '@/components/ui/card/CardHeader.vue';
import Logo from '@/components/Logo.vue';
import CardContent from '@/components/ui/card/CardContent.vue';
import { Input } from '@/components/ui/input';
import { Tmuted, Tp } from '@/components/ui/typography';
import Button from '@/components/ui/button/Button.vue';

</script>
<template>
    <div class="h-full flex flex-col justify-center items-center">
        <Card class="w-[80%]">
            <CardHeader class="text-center">
                <Logo></Logo>
                <Tp class="text-sm !mt-0">Looks like you're new to this game. So please enter your server data below.
                </Tp>
            </CardHeader>
            <CardContent>
                <form class="flex flex-col gap-4 form-col">
                    <div>
                        <Label for="serverName">Hostname</Label>
                        <Input id="serverName" placeholder="My Server Local" />
                    </div>
                    <div>
                        <Label for="serverUrl">Server Url</Label>
                        <Input id="serverUrl" placeholder="https://localhost" />
                    </div>
                    <Button>Connect to Server</Button>
                    <Tmuted>Are you new to this game? Click this link to check out about this game!</Tmuted>
                </form>
            </CardContent>
        </Card>
    </div>
</template>