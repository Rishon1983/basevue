<template>
    <div id="login" class="logs-component">
        <h1> Test </h1>
        <h3 v-if="login">Hi, {{userName}} !</h3>
        <div v-if="login" class="content">
            <div class="buttons-container">
                <div class="button-container">
                    <button @click="getLogs" class="button">Get</button>
                </div>
                <div class="button-container">
                    <button @click="getDataFromSql" class="button">Get from MySQL</button>
                </div>
            </div>
            <h2>Logs</h2>
            <div class="output-container">
                <div v-for="log in logsData" :key="log.key" class="one-row-container">
                    <div class="one-row">
                        <span class="text">id:</span>
                        <span>{{log._id}}</span>
                    </div>
                    <div class="one-row">
                        <span class="text">userId:</span>
                        <span>{{log.userId}}</span>
                    </div>
                    <div class="one-row">
                        <span class="text">Time:</span>
                        <span>{{new Date(log.CT)}}</span>
                    </div>
                </div>
            </div>
            <h2>Users</h2>
            <div class="output-container">
                <div v-for="log in mysqlData" :key="log.key" class="one-row-container">
                    <div class="one-row">
                        <span class="text">id:</span>
                        <span>{{log.id}}</span>
                    </div>
                    <div class="one-row">
                        <span class="text">name:</span>
                        <span>{{log.name}}</span>
                    </div>
                    <div class="one-row">
                        <span class="text">age:</span>
                        <span>{{log.age}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="!login" class="content login">
            <div class="login-container">
                <h3>Login</h3>
                <div class="login-input-container">
                    <label>
                        <input v-model="loginName" placeholder="name">
                    </label>
                </div>
                <div class="login-input-container">
                    <label>
                        <input v-model="loginPassword" placeholder="password">
                    </label>
                </div>
                <button @click="loginAction">Login</button>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex';

    export default {
        name: 'LoginComponent',
        props: {},
        data() {
            return {
                updateId: '',
                deleteId: '',
                loginName: 'Admin',
                loginPassword: '1234'
            }
        },
        computed: {
            ...mapState({
                logsData: state => state.login.logsData,
                mysqlData: state => state.login.mysqlData,
                login: state => state.login.login,
                userName: state => state.login.userName
            })
        },
        methods: {
            ...mapActions('login', [
                'getLogs',
                'getDataFromSql',
                'loginClient'
            ]),
            updateSettings() {
                if (this.updateId !== '' && typeof this.updateId === 'string') {
                    this.settingsAction({settingsId: this.updateId, action: 'update'});
                    this.clearInputsSettingsId();
                } else {
                    alert('please, check updateId');
                }
            },
            deleteSettings() {
                if (this.deleteId !== '' && typeof this.updateId === 'string') {
                    this.settingsAction({settingsId: this.deleteId, action: 'delete'});
                    this.clearInputsSettingsId();
                } else {
                    alert('please, check settingsId');
                }
            },
            clearInputsSettingsId() {
                this.updateId = '';
                this.deleteId = ''
            },
            loginAction() {
                if (this.loginName !== '' && this.loginPassword !== '') {
                    this.loginClient({username: this.loginName, password: this.loginPassword});
                } else {
                    alert('please, put name and password');
                }
            }
        },
        created() {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css" lang="scss" scoped>
    #login.logs-component {
        h2 {
            display: flex;
            justify-content: flex-start;
            margin-inline-start: 50px;
            font-weight: bold;
            text-decoration: underline;
        }

        .content {
            .buttons-container {
                display: flex;
                flex-direction: column;
                align-items: baseline;

                .button-container {
                    display: flex;
                    align-items: center;

                    button {
                        height: 35px;
                        /*width: 90px;*/
                        padding: 0 20px;
                        margin: 10px;
                        cursor: pointer;
                    }

                    input {
                        height: 35px;
                        width: 188px;
                        padding: 0 5px;
                    }
                }
            }

            .output-container {
                display: flex;
                flex-direction: column;
                align-items: baseline;

                .one-row-container {
                    display: flex;
                    flex-direction: column;
                    align-items: baseline;
                    border-bottom: 1px solid #ececec;
                    padding: 5px 15px;

                    .one-row {
                        .text {
                            font-weight: bold;
                            margin-inline-end: 10px;
                        }
                    }
                }
            }

            &.login {
                display: flex;
                align-items: center;
                justify-content: center;

                .login-container {
                    width: 300px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    box-shadow: 0 0 8px 2px #ccc;

                    .login-input-container {
                        height: 30px;
                        margin: 10px 0 25px 0;

                        input {
                            height: 35px;
                            margin: 10px;
                            padding: 0 10px;
                        }
                    }

                    button {
                        width: 100px;
                        height: 30px;
                        margin: 10px 0 30px 0;
                        cursor: pointer;
                    }
                }
            }
        }
    }
</style>
