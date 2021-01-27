// not calling this function from within html, only using with js code 
// this doesn't need to be within vue app
function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max-min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0
        };
    },
    computed: {
        monsterBarStyles() {
            return {width: this.monsterHealth + '%'};
        },
        playerBarStyles() {
            return {width: this.playerHealth + '%'};
        },
        mayUseSpecialAttack() {
            return this.currentRound % 3 != 0;
        }
    },
    methods: {
        attackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(5,12);
            this.monsterHealth -= attackValue;
            this.attackPlayer(); // monster attacks back at player
        },
        attackPlayer() {
            const attackValue = getRandomValue(8,15);
            this.playerHealth -= attackValue;
        },
        specialAttackMonster() {
                const attackValue = getRandomValue(10,25);
                this.monsterHealth -= attackValue;
                this.attackPlayer();
        }
    }
});

app.mount('#game');